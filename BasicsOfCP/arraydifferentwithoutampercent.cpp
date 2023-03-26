#include <bits/stdc++.h>
using namespace std;
const int N=1e3+10;
int a[N][N];

void fun(){
    a[0][0]=5;
}


int main(){
    a[0][0]=7;
    cout<<a[0][0]<<endl;
    fun();
    cout<<a[0][0]<<endl;


   
}