# import hashlib
# import itertools
# import string

# target_hash = 'b584eec728548aced5a66c0267dd520a00871b5e7b735b2d8202f86719f61857'

# def generate_hash(text):
#     return hashlib.sha256(text.encode()).hexdigest()
# def find_original_text(start):
#     characters = string.ascii_lowercase + string.digits
# for length in range(1, 6):  # Adjust length range as needed
# for suffix in itertools.product(characters, repeat=length):
# candidate = start + ''.join(suffix)


# if generate_hash(candidate) == target_hash:
# return candidate
# return None

# original_text = find_original_text('Ek')
# if original_text:
# print(f"Original text: {original_text}")
# else:
# print("No match found.")


# # HASH: b584eec728548aced5a66c0267dd520a00871b5e7b735b2d8202f86719f61857


import hashlib
import itertools
import string

target_hash = 'b584eec728548aced5a66c0267dd520a00871b5e7b735b2d8202f86719f61857'

def generate_hash(text):
    return hashlib.sha256(text.encode()).hexdigest()

def find_original_text(start):
    characters = string.ascii_lowercase + string.digits
    for length in range(1, 6):  # Adjust length range as needed
        for suffix in itertools.product(characters, repeat=length):
            candidate = start + ''.join(suffix)
            if generate_hash(candidate) == target_hash:
                return candidate
    return None

original_text = find_original_text('Ek')
if original_text:
    print(f"Original text: {original_text}")
else:
    print("No match found.")
