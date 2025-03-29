#include <bits/stdc++.h>

using namespace std;

int bf_way(long long int number) {
  int count = 0;

  while (number > 0) {
    count++;
    number /= 10;
  }

  return count;
}

int o_way(long long int number) { return (int)(log10(number) + 1); }

int main(int argc, char *argv[]) {
  long long int number = 0;

  cout << "input a number to found digits: ";
  cin >> number;

  int count_bf, count_o = 0;

  count_bf = bf_way(number);
  count_o = o_way(number);

  cout << "[bruteforce] found " << count_bf << " digits" << endl;
  cout << "[optimal] found " << count_o << " digits" << endl;

  return 0;
}
