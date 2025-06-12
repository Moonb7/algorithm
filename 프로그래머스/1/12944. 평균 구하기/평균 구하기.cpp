#include <string>
#include <vector>

using namespace std;

double solution(vector<int> arr) {
    int temp = 0;
    for(int i = 0; i < arr.size(); i++) {
        temp += arr[i];
    }
    
    double answer = (double)temp / arr.size();
    
    return answer;
}