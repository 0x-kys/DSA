#include <bits/stdc++.h>

using namespace std;

int reverse_number(int number) {
  int reversed = 0;

  while (number > 0) {
    reversed = (reversed * 10) + (number % 10);
    number /= 10;
  }

  return reversed;
}

bool checkPalindrome(int number) {
  if (number != reverse_number(number)) {
    return false;
  }

  return true;
}

int main(int argc, char *argv[]) {
  int number = 0;

  cout << "Input number to check for palindrome: ";
  cin >> number;

  if (checkPalindrome(number) == 1) {
    cout << number << " is palindrome\n";
  } else {
    cout << number << " is not palindrome\n";
  }

  return 0;
}
