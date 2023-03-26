#include <bits/stdc++.h>
using namespace std;

void fun(int a[]){
    a[0]=5;
}


int main(){
    int a[10];
    a[0]=7;
    cout<<a[0]<<endl;
    fun(a);
    cout<<a[0]<<endl;


   
}