#include <bits/stdc++.h>
#include <vector>

using namespace std;

struct GCD {
  vector<int> vec;
  int gcd;
};

int computeGCD(int a, int b) {
  a = abs(a);
  b = abs(b);
  while (b) {
    a %= b;
    swap(a, b);
  }
  return a;
}

GCD sol1(int num1, int num2) {
  vector<int> vec;
  int gcd = computeGCD(num1, num2);

  if (gcd == 0) {
    return {vec, 0};
  }

  for (int i = 1; i <= gcd; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      vec.push_back(i);
    }
  }

  return {vec, gcd};
}

int main() {
  int n1, n2;

  cout << "Enter first number: ";
  cin >> n1;

  cout << "Enter second number: ";
  cin >> n2;

  GCD result = sol1(n1, n2);

  if (!result.vec.empty()) {
    cout << "Common factors: ";
    for (int factor : result.vec) {
      cout << factor << " ";
    }
    cout << endl;
  } else {
    cout << "No common factors (one or both numbers are 0)." << endl;
  }

  cout << "GCD: " << result.gcd << endl;

  return 0;
}
