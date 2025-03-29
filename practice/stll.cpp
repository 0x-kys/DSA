#include <bits/stdc++.h>

using namespace std;

int main(int argc, char *argv[]) {
  /*
   * an unordered_set set in STL is a container that stores unique elements in
   * no particular order. Every operation on an unordered_set set takes O(1)
   * complexity in the  average case and takes O(n) in the worst case.
   *
   * */

  unordered_set<int> s;
  for (int i = 1; i <= 10; i++) {
    s.insert(i);
  }

  cout << "Elements present in the unordered set: ";
  for (auto it = s.begin(); it != s.end(); it++) {
    cout << *it << " ";
  }
  cout << endl;

  int n = 2;
  if (s.find(n) != s.end())
    cout << n << " is present in unordered set" << endl;

  s.erase(s.begin());
  cout << "Elements after deleting the first element: ";
  for (auto it = s.begin(); it != s.end(); it++) {
    cout << *it << " ";
  }
  cout << endl;

  cout << "The size of the unordered set is: " << s.size() << endl;

  if (s.empty() == false)
    cout << "The unordered set is not empty " << endl;
  else
    cout << "The unordered set is empty" << endl;

  s.clear();
  cout << "Size of the unordered set after clearing all the elements: "
       << s.size();

  /*
   * Vectors in STL are basically dynamic arrays that have the ability to change
   * size whenever elements are added or deleted from them. Vector elements can
   * be easily accessed and traversed using iterators. A vector stores elements
   * in contiguous memory locations.
   *
   * */

  vector<int> v;

  for (int i = 0; i < 5; i++) {
    v.push_back(i);
  }

  cout << "the elements in vector are: ";
  for (auto it = v.begin(); it != v.end(); it++) {
    cout << *it << " ";
  }
  cout << endl;

  cout << "first element of vector is " << v.front() << "\n";
  cout << "last element of vector is " << v.back() << "\n";
  cout << "size of vector is " << v.size() << "\n";
  cout << "deleting element from the end " << v[v.size() - 1] << "\n";
  v.pop_back();

  cout << "vector after deleting last element: ";
  for (auto it = v.begin(); it != v.end(); it++) {
    cout << *it << " ";
  }
  cout << endl;

  cout << "inserting 5 at the beginning: " << endl;
  v.insert(v.begin(), 5);

  cout << "first element is " << v[0] << endl;
  cout << "removing first element" << endl;
  v.erase(v.begin());
  cout << "now, first element is " << v[0] << endl;

  if (v.empty()) {
    cout << "vector is empty" << endl;
  } else {
    cout << "vecotr has elements" << endl;
  }

  v.clear();
  cout << "removed all elements from vector. size is " << v.size() << endl;

  set<int> st;

  for (int i = 0; i < 5; i++) {
    st.insert(i);
  }

  cout << "elements in set are ";
  for (auto it = st.begin(); it != st.end(); it++) {
    cout << *it << " ";
  }
  cout << endl;

  return 0;
}
