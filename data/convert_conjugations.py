import json
import re

def parse_conjugations(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    verbs = []
    current_verb = None
    
    # Mappings
    tense_map = {
        "PRES": "present",
        "IMPE": "imperfect",
        "PRPE": "present_perfect",
        "PARE": "remote_past",
        "FUTU": "future",
        "COND": "conditional",
        "PRSU": "present_subjunctive",
        "IMSU": "imperfect_subjunctive",
        "IPER": "imperative",
        "GERU": "gerund"
    }

    # Verb definitions
    # parl-are
    # cred-ere
    # dorm-ire
    
    verb_defs = [
        {"infinitive": "parlare", "root": "parl", "type": "ARE"},
        {"infinitive": "credere", "root": "cred", "type": "ERE"},
        {"infinitive": "dormire", "root": "dorm", "type": "IRE"}
    ]

    # Parse the rules from the file first
    rules = {}
    current_type = None
    
    for line in lines:
        line = line.strip()
        if line.startswith("- ARE"):
            current_type = "ARE"
            rules[current_type] = {}
        elif line.startswith("- ERE"):
            current_type = "ERE"
            rules[current_type] = {}
        elif line.startswith("- IRE"):
            current_type = "IRE"
            rules[current_type] = {}
        elif line.startswith("- ") and current_type:
            parts = line.replace("- ", "").split(":")
            if len(parts) >= 2:
                tense_code = parts[0].strip()
                endings_str = parts[1].strip()
                
                # Split endings
                # Handles special cases like "ho/sono -ato"
                endings = [e.strip() for e in endings_str.split(",")]
                rules[current_type][tense_code] = endings

    # Generate full conjugations
    output_data = []

    for verb_def in verb_defs:
        infinitive = verb_def["infinitive"]
        root = verb_def["root"]
        vprop = verb_def["type"]
        
        verb_obj = {
            "infinitive": infinitive,
            "tenses": {}
        }
        
        verb_rules = rules.get(vprop, {})
        
        for code, full_name in tense_map.items():
            if code in verb_rules:
                endings = verb_rules[code]
                conjugated = []
                
                # Handle special logic
                # For PRPE: "ho/sono -ato"
                if code == "PRPE":
                    # For simplicty in this quiz, let's assume avere for these 3 if not specified, 
                    # but file says "ho/sono -ato". 
                    # Parlare -> ho parlato. Credere -> ho creduto. Dormire -> ho dormito.
                    # All take avere? Dormire usually takes avere.
                    # Let's just construct the string as provided in the pattern if it's dynamic
                    # But the requirement says "parlare, parlo, parli" -> suggest simple forms first.
                    # Wait, PRPE is compound. "ho parlato".
                    # Let's stick to the pattern replacement.
                    
                    suffix = endings[0].replace("ho/sono ", "")
                    # If it starts with -, it's a suffix.
                    if suffix.startswith("-"):
                        participle = root + suffix[1:]
                        # Expand to 6 persons? Usually PRPE has aux verb conjugation.
                        # The file only gives 'ho/sono -ato'.
                        # This implies the user might know the aux conjugation or we just display 'ho parlato' etc?
                        # The user wants "fill out all of the information".
                        # If the file doesn't list all 6 endings for PRPE, maybe we treat it differently?
                        # Line 7: "PRPE: present perfect"
                        # Line 25: "PRPE: ho/sono -ato" -> This is just one form? 
                        # Or maybe it means "ho parlato, hai parlato..."?
                        # The file format is sparse.
                        # Given the user request "parlare, parlo, parli", this looks like PRES (Present).
                        # I will focus on generating what IS in the file.
                        # If the file has 6 endings, generate 6 forms.
                        # If 1, generate 1 (or 6 identical if it makes sense, but unlikely).
                        pass

                forms = []
                for i, ending in enumerate(endings):
                    if ending == "*":
                        forms.append("")
                    elif ending.startswith("-"):
                        forms.append(root + ending[1:])
                    elif " " in ending and ending.split(" ")[1].startswith("-"): # ho/sono -ato
                         aux_part = ending.split(" ")[0]
                         suffix = ending.split(" ")[1]
                         forms.append(aux_part + " " + root + suffix[1:])
                    else:
                        # Fallback
                        forms.append(root + ending)
                
                verb_obj["tenses"][full_name] = forms
        
        output_data.append(verb_obj)

    return output_data

if __name__ == "__main__":
    data = parse_conjugations(r"c:\edward\projects_2025_to_move\chunks\chunk-verb-conjugation-quiz\data\conjugations.txt")
    print(json.dumps(data, indent=2))
