#include <bits/stdc++.h>

using namespace std;

int reverse(long long int number) {
  int rev = 0;

  while (number > 0) {
    rev = (rev * 10) + (number % 10);
    number /= 10;
  }

  return rev;
}

int main(int argc, char *argv[]) {
  long long int number = 0;

  cout << "Enter a number to reverse: ";
  cin >> number;

  cout << "reversed number is " << reverse(number) << endl;

  return 0;
}
