import PyPDF2
    print(f"The PDF has pages.")


# Open the PDF file
pdf_file_path = 'path_to_your_pdf_file.pdf'  # Replace with the path to your PDF file
with open(pdf_file_path, 'rb') as file:
    # Create a PDF reader object
    pdf_reader = PyPDF2.PdfReader(file)
    
    # Get the total number of pages
    num_pages = len(pdf_reader.pages)
    
    print(f"The PDF has {num_pages} pages.")
