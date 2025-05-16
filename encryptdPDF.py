import base64
import time
import PyPDF2
import fitz
from pdf2image import convert_from_bytes
import io
import os
import sys

# File paths and configuration
pdf_file_path = '/Users/gaurava4/Downloads/zero2one_protected.pdf'  # Replace with the path to your PDF file
password = 'Zero@1992'  # Replace with the password
output_dir = "/Users/gaurava4/Downloads/PDF_Images1"  # Replace with your desired output directory
os.makedirs(output_dir, exist_ok=True)  # Create the output directory if it doesn't exist

try:
    # Start timing the execution
    start_time = time.time()

    # Using PyPDF2 for initial decryption check
    with open(pdf_file_path, 'rb') as file:
        pdf_reader = PyPDF2.PdfReader(file)
        
        if pdf_reader.is_encrypted:
            try:
                pdf_reader.decrypt(password)
                print("PDF decrypted successfully with PyPDF2.")
            except Exception as e:
                print(f"Error decrypting PDF with PyPDF2: {e}")
                sys.exit(1)
        
        num_pages = len(pdf_reader.pages)
        print(f"The PDF has {num_pages} pages (PyPDF2).")

    # Using PyMuPDF (fitz) for processing
    doc = fitz.open(pdf_file_path)
    if doc.is_encrypted:
        if not doc.authenticate(password):
            print("Failed to decrypt the PDF with fitz.")
            sys.exit(1)  # Exit if decryption fails
        else:
            print("PDF decrypted successfully with fitz.")

    # Get the total number of pages
    num_pages = doc.page_count
    print(f"The PDF has {num_pages} pages (fitz).")

    # Process the PDF: Convert pages to images
    with open(pdf_file_path, 'rb') as file:
        pdf_file_content = file.read()
        base64_pdf_content = base64.b64encode(pdf_file_content).decode("utf-8")
        pdf_bytes = base64.b64decode(base64_pdf_content)
        images = convert_from_bytes(pdf_bytes)

        for i, image in enumerate(images):
            # Save each page as an image
            output_file_path = os.path.join(output_dir, f"page_list_tst_data_{i + 1}.jpg")
            image.save(output_file_path, format='JPEG', optimize=True)
            print(f"Saved page {i + 1} as {output_file_path}")

    # End timing and calculate execution time
    end_time = time.time()
    total_time = end_time - start_time
    print(f"Total time taken: {total_time:.2f} seconds.")

except FileNotFoundError:
    print(f"Error: The file '{pdf_file_path}' was not found.")
except Exception as e:
    print(f"An unexpected error occurred: {e}")
