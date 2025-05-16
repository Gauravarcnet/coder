# import base64
# import logging
# import time
# import PyPDF2
# # import fitz
# # from pdf2image import convert_from_bytes
# import io
# import os

# from pdf2image import convert_from_bytes

# logger = logging.getLogger()
# logger.setLevel(logging.INFO)

# def get_base64_image_size(base64_str):
#     """Calculate the byte size of an image from its Base64 string."""
#     base64_length = len(base64_str)
#     padding = base64_str.count('=')
#     byte_size = (base64_length * 3 // 4) - padding
#     return byte_size
# # Open the PDF file
# # pdf_file_path = '/Users/gaurava4/Downloads/09+-VI-20240102+Ernst+&+Young+LLP.pdf'  # Replace with the path to your PDF file
# # pdf_file_path = '/Users/gaurava4/Downloads/ProfilePIc.jpeg'  # Replace with the path to your PDF file
# password = 'Zero@1992'
# output_dir = "/Users/gaurava4/Downloads/PDF_Images1"  # Replace with your desired output directory
# # pdf_file_path = '/Users/gaurava4/Downloads/zero2one_protected.pdf'  # Replace with the path to your PDF file

# os.makedirs(output_dir, exist_ok=True)  # Create the directory if it doesn't exist
# SIZE_LIMIT = 1 * 1024 * 1024  # 6 MB in bytes
# # SIZE_LIMIT = 4096  # 6 MB in bytes
# pdf_file_path = '/Users/gaurava4/Downloads/AlpInvest Co-Investment Fund (Lux Feeder) VIII SCSp - excerpt - B244272.pdf'  # Replace with the path to your PDF file



# def is_pdf_encrypted(pdf_content):
#     try:
#         # logger.info("The PDF is encrypted. Please provide an unencrypted file")
#         # # Check if the PDF is encrypted
#         # pdf_bytes = base64.b64decode(pdf_content)
#         # pdf_reader = PyPDF2.PdfReader(pdf_content)
#         logging.info("Checking if the PDF is encrypted...")

#         # Decode the Base64 string to get the raw PDF bytes
#         # pdf_bytes = base64.b64decode(pdf_content)
#         logging.info("pdf_bytes>>>tst")
#         pdf_reader = PyPDF2.PdfReader(io.BytesIO(pdf_content))
#         if pdf_reader.is_encrypted:
#             logging.info("PDF is encrypted.")
#             # Try to decrypt the PDF if a password is provided
#             if password:
#                 return True
#             else:
#                 return False

#         return False
#     except Exception as e:
#         # Return False if unable to process the PDF (e.g., corrupt PDF)
#         return False
# # def is_pdf_size_exceeded(pdf_content):
# #     try:
# #         # pdf_bytes = base64.b64decode(pdf_content)
# #         logger.info(len(pdf_content))
# #         logger.info(len(len(pdf_content)))
# #         if len(pdf_content) > SIZE_LIMIT:
# #             logger.info("PDF size exceeds 6 MB limit.")
# #             return True
# #         return False
# #     except Exception as e:
# #         logger.error("PDF size exceeds 6 MB limit.")
# #         return None

# # Start timing the execution
# start_time = time.time()
# # with open(pdf_file_path, 'rb') as file:
# #     pdf_reader = PyPDF2.PdfReader(file)

    
# #     # Decrypt the PDF with the provided password
# #     if pdf_reader.is_encrypted:
# #         # Attempt to decrypt the PDF file
# #         pdf_reader.decrypt(password)
    
# #     # Get the total number of pages
# #     num_pages = len(pdf_reader.pages)
    
#     # print(f"The PDF has {num_pages} pages.")
    
#     # # Optionally, extract text from the first page
#     # first_page = pdf_reader.pages[0]
#     # text = first_page.extract_text()
#     # End timing the execution
# def process_pdf():
#     try:
#         with open(pdf_file_path, 'rb') as file:
#             base64_pdf_content = base64.b64encode(file.read()).decode('utf-8')
#             decoded_document = base64.b64decode(base64_pdf_content)
#             is_encrypted = is_pdf_encrypted(decoded_document)
#             logging.info("PDF is_encrypted: %s", is_encrypted)
#             if is_encrypted:
#                 logger.info(is_encrypted)
#                 return {"status": "error", "message": "The PDF is encrypted. Please provide an unencrypted file."}

#             # if is_pdf_size_exceeded(decoded_document):
#             #     logger.info("PDF size exceeds 6 MB limit.")
     
#     #     return {"status": "error", "message": "PDF size exceeds 6 MB limit."}
#     except FileNotFoundError as e:
#         logger.error(f"File error: {e}")
#     except Exception as e:
#         logger.error(f"An error occurred: {e}")

#     logger.info("The PDF is not encrypted.")
#     # with open(pdf_file_path, 'rb') as file:
#     #     reader = PyPDF2.PdfReader(file)
#     #     # if reader.is_encrypted:
#     #     #     raise Exception("The PDF File is encrypted or is corrupted.")

#     #     page_count = len(reader.pages)
#     pdf_bytes = base64.b64decode(base64_pdf_content)
#     # try:cl\
#     #         is_pdf_encrypted(pdf_bytes)
#     # finally:
#     #     logging.info("")
#     images = convert_from_bytes(pdf_bytes)
#     # print(f"Text from the first page without dcrypt iamg:\n{images}")
#     for i, image in enumerate(images):
#         # Save the image to an in-memory file
#         img_data = io.BytesIO()
#         image.save(img_data, format='PNG', optimize=True)
#         output_file_path = os.path.join(output_dir, f"page_Data_tst1_{i + 1}.jpg")
#         image.save(output_file_path, format='JPEG', optimize=True)
#     with open(output_file_path, "rb") as img_file:
#         base64_str = base64.b64encode(img_file.read()).decode("utf-8")
#     byte_size = get_base64_image_size(base64_str)
#     base_Size = ( byte_size * 4 ) / 3
#     print(f"Byte size of image: {byte_size} bytes")
#     print(f"Tokenestimation: {round(base_Size)}")
# # Calculate the total time taken
#         # end_time = time.time()

#         # total_time = end_time - start_time

#         # print(f"\nTotal time taken to read all files: {total_time} seconds.")
    
# # print(f"Text from the first page:\n{num_pages}")
# # start_time = time.time()

# # doc = fitz.open(pdf_file_path)
# # if doc.is_encrypted:
# #     # Attempt to authenticate with the password
# #     if not doc.authenticate(password):
# #         print("Failed to decrypt PDF.")
# #         exit(1)  # Exit if decryption fails
# #     else:
# #         print("PDF decrypted successfully.")

# # # # Get the total number of pages
# # num_pages = doc.page_count
# # with open(pdf_file_path, 'rb') as file:
# #     # Create a PDF reader object
# #     pdf_file_content = file.read()
# #     base64_pdf_content = base64.b64encode(pdf_file_content).decode("utf-8")
# #     # print(f"Text from the first page without dcrypt:\n{base64_pdf_content[:20]}")
# #     pdf_bytes = base64.b64decode(base64_pdf_content)
# #     images = convert_from_bytes(pdf_bytes)
# #     # print(f"Text from the first page without dcrypt iamg:\n{images}")
# #     for i, image in enumerate(images):
# #         # Save the image to an in-memory file
# #         img_data = io.BytesIO()
# #         image.save(img_data, format='JPEG', optimize=True)
# #         output_file_path = os.path.join(output_dir, f"page_Data_list_{i + 1}.jpg")
# #         image.save(output_file_path, format='JPEG', optimize=True)
# # # Print the total number of pages
# # print(f"The PDF has {num_pages} pages.")

# # # Measure execution time
# # end_time = time.time()
# # execution_time = end_time - start_time
# # print(f"Time taken to read the PDF: {execution_time:.4f} seconds.")
# response = process_pdf()
# # response1 = is_pdf_encrypted("b'gAAAAABgOGWxr2Zj-9ey0MfZ0-43xzEjv7_OaeE-0aWb-xt6YhZexb2lGChmX0HTd7diG6lmJ9g='")
# print(response)
import json


body = {'s3Bucket': 's3Bucket', 's3Path': 's3Path', 'pdfName': 'pdfName', 'requestId': 1234}
# body = json.dumps(body)
print(json.loads(body))