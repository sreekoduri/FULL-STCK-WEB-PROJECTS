🚀 Features Added
1. Bulk Label Printing
Supports Excel (.xlsx) and CSV files
Reads label data and prints in bulk
Matches:
Product
Brand
Variant (quantity + units)
Generates PRN and sends to printer.

2. Excel Format Support

Required columns:

Productname
CategoryName
BrandName
quantity
Units
packcount
label_for 

Optional:
barcode

3. Validation & Error Handling
Skips rows if:
Product not found
Brand mismatch
Variant mismatch
Invalid packcount
Logs all actions to print_ledger..

4. JSON → Excel Conversion
Converts nested product JSON into flat Excel format
Extracts:
Product details
Brand
Financial variants
Barcode
Generates ready-to-use label template

5. Improvements
Added safe parsing for numbers
Default handling for empty values
Better column flexibility (packcount, Stock, etc.)
Cleaner matching logic..

📊 Example Workflow
Export data from JSON → Excel
Fill:
packcount
label_for
Run bulk print
Labels printed + logs stored

🔥 Future Improvements
Barcode-based label printing
Print queue system
Auto Excel template generation
UI-based label selection
📁 Files Added / Updated
printlabel_interactive.py
json_to_excel.py

