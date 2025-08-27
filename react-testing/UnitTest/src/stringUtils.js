// reverseString(str): This function reverses a given string str. Write tests to verify that:

// The function correctly reverses different strings.
// It works with strings that include spaces and special characters.}

export function reverseString(str) {
  return str.split("").reverse().join("");
}

// capitalizeWords(str): This function capitalizes the first letter of each word in a string str. Write tests to ensure that:

// The function capitalizes each word properly, even if the string has mixed cases.
// It handles edge cases like strings with all uppercase letters, all lowercase letters, or punctuation.

export function capitalizeWords(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

//isPalindrome(str): This function checks if a string str is a palindrome (reads the same forward and backward). Write tests to verify that:

// It returns true for valid palindromes.
// It returns false for non-palindromes.
// It handles strings with special characters, spaces, and case differences.

export function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}
