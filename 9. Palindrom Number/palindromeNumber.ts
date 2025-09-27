function isPalindrome(x: number): boolean {
    const reversedString = String(x).split('').reverse().join('');

    return reversedString === String(x);
};