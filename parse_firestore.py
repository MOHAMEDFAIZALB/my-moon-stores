
import json
import os

def parse_firestore_value(field_value):
    if 'stringValue' in field_value:
        return field_value['stringValue']
    elif 'integerValue' in field_value:
        return int(field_value['integerValue'])
    elif 'doubleValue' in field_value:
        return float(field_value['doubleValue'])
    elif 'booleanValue' in field_value:
        return field_value['booleanValue']
    return None

def main():
    with open('firestore_data.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

    products = []
    
    if 'documents' in data:
        for doc in data['documents']:
            # ID is the last part of the name path
            full_name = doc['name']
            doc_id = full_name.split('/')[-1]
            
            product = {'id': doc_id}
            
            fields = doc.get('fields', {})
            for key, val in fields.items():
                product[key] = parse_firestore_value(val)
            
            # Ensure price is a number
            if 'price' in product:
                try:
                    product['price'] = int(product['price'])
                except:
                    product['price'] = 0
            
            products.append(product)

    # Sort by ID to keep it stable
    products.sort(key=lambda x: x['id'])

    # Write to file
    with open('new_products.js', 'w', encoding='utf-8') as outfile:
        outfile.write("const defaultProducts = [\n")
        for p in products:
            props = []
            props.append(f'id: "{p["id"]}"')
            for k, v in p.items():
                if k == 'id': continue
                if isinstance(v, str):
                    safe_v = v.replace('"', '\\"').replace('\n', ' ')
                    props.append(f'{k}: "{safe_v}"')
                else:
                    props.append(f'{k}: {v}')
            outfile.write(f"  {{ {', '.join(props)} }},\n")
        outfile.write("];\n")
    print("Done writing new_products.js")

if __name__ == "__main__":
    main()
