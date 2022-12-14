#include <iostream>
#include <algorithm>
#include <fstream>
#include <Windows.h>
#include <vector>
#include <stdlib.h>
#include <map>
#include <ctime>

using namespace std;

ifstream fin("input.txt");

struct p {
    long long x, y;
}a[100000], b[100000];

bool is_ans_exist = 1;
long long total_ans = 1e18;

bool sortf(p a, p b) {

    return a.x < b.x or (a.x == b.x and a.y < b.y);
}

long long dist(p a, p b) {
    return (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y);
}


long long find(int l, int r, p(&a)[100000]) {
    if (r - l <= 2) {
        if (a[r - 1].y < a[l].y) swap(a[r - 1], a[l]);
        if (r - l == 1) return 9999999;
        else return dist(a[l], a[r - 1]);
    }

    long long h1 = find(l, (l + r) / 2, a); 
    long long h2 = find((l + r) / 2, r, a);
    long long h = min(h1, h2);
    if (total_ans > h) {
        total_ans = h;
    }

    long long left = l;
    long long middle = (l + r) / 2;

    for (int i = l; i < r; i++) { 
        if (left == (l + r) / 2) b[i] = a[middle++];
        else if (middle == r) b[i] = a[left++];
        else if (a[middle].y < a[left].y) b[i] = a[middle++];
        else b[i] = a[left++];
    }
    for (int i = l; i < r; i++) {// O(r - l)
        a[i] = b[i];
    }
    vector <p> B;
    for (int i = l; i < r; i++) {// O(r - l)
        if (abs(a[(l + r) / 2].x - a[i].x) * abs(a[(l + r) / 2].x - a[i].x) <= h) {
            B.push_back(a[i]);
        }
    }

    long long ans = h;

    for (int i = 0; i < B.size(); i++) {// O(1)
        int x = 0;
        for (int j = i + 1; j < B.size(); j++) {
            if (abs(B[i].y - B[j].y) * abs(B[i].y - B[j].y) <= h) {
                ans = min(ans, dist(B[i], B[j]));
                if (total_ans == dist(B[i], B[j])) x++;
                else if (total_ans > ans) {
                    x = 1;
                    total_ans = ans;
                }
            }
            else break;
        }
        for (int j = i - 1; j >= 0; j--) {
            if (abs(B[i].y - B[j].y) * abs(B[i].y - B[j].y) <= h) {
                ans = min(ans, dist(B[i], B[j]));
                if (total_ans == dist(B[i], B[j])) x++;
                else if (total_ans > ans) {
                    x = 1;
                    total_ans = ans;
                }
            }
            else break;
        }
        if (x > 1) {
            is_ans_exist = 0;
        }
        else {
            is_ans_exist = 1;
        }
    }
    return min(ans, h);


}


int main()
{
    srand(time(0));
    SetConsoleCP(1251);
    SetConsoleOutputCP(1251);
    unsigned int start_time = clock();
    int n;
    fin >> n;
    for (int i = 0; i < n; i++) {
        fin >> a[i].x >> a[i].y;
    }

    sort(a, a + n, sortf); 

    long long ans = find(0, n, a);

    if (is_ans_exist == 1) {
    }
    else {
        cout << "Ответа нет";
    }
    unsigned int end_time = clock(); 
    unsigned int search_time = end_time - start_time; 
    cout << "time: " << search_time << "ms" << endl;
    return 0;
}
