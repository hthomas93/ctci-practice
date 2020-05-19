console.log("linked");

{/* 1.1 Is Unique
    Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data
        structures? */}

function isUnique(str) {
    // ES6 solution
    // Set is a class constructor that takes an argument and returns an object consisting of its unique values
    let setString = new Set(str);
    // if the length of the string is not equal to the number of values in the string, return false
    if (str.length != setString.size) {
        console.log("false");
        return false;
    } else {
        console.log("true");
        return true;
    }

    // I believe this solution is O(n)
    // The other solution would be to do a single pass through the string, and if the ith value of the string corresponds to any other value in the string, return false.

}

isUnique("abcdefg");
isUnique("aabbccdd");

{/* <1.2 Check Permutation
    Given two strings, write a method to decide if one is a permutation of the other.< */}

function isPermutation(str1, str2) {
    let obj1 = {};
    let obj2 = {};
    let splitStr1 = str1.split("");
    let splitStr2 = str2.split("");
    for (let val of splitStr1) {
        obj1 = (obj1 || 0) + 1;
    }
    for (let val of splitStr2) {
        obj2 = (obj2 || 0) + 1;
    }
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            console.log("Not a permutation");
            return false;
        }
    }
    console.log("It's a permutation");
    return true;
    // create object of both of the strings
    // if the keys in str1 have the same values as str2, return true
    // else return false
}

{/* 1.3 URLify
    Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space
        at the end to hold the additional characters, and that you are given the "true" length of the string. */}

{/* 1.4 Palindrome Permutation
    Given a string, write a function to check if it is a permutation of a palindrome. You can ignore casing and
        non-letter characters. */}

// 1.5 One Away
// There are three types of edits that can be performed on strings insert a character, remove a character, or replace a character. Given two strings, write a function tcheck if they are one edit, or zero edits, away.

{/* 1.6 String Compression
    Implement a method to perform basic string compression using the counts of repeated characters. For example, the
        string aabcccccaaa would become a2b1c5a3. If the 'compressed' string would not become smaller than the original
        string, your method should return the original string. You can assume the string has only uppercase and
        lowercase characters. */}


// 1.7 Rotate Matrix
// Given an image represented by an N x N matrix, where each pixel in the image is represented by an integer, write a method to rotate the image by 90 degrees. Can you do this in one place?

{/* 1.8 Zero Matrix
    Write an algorithm such that if an element in an M x N matrix is 0, its entire row and column are set to 0. */}

{/* 1.9 String Rotation
    Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1
        and s2, write code to see if s2 is a rotation of s1 using only one call to isSubstring. For example,
        'waterbottle' is a rotation of 'erbottlewat'. */}