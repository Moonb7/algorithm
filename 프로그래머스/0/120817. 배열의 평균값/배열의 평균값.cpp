#include <string>
#include <vector>

using namespace std;

double solution(vector<int> numbers) {
    double answer = 0;
    double temp = 0;
    for(int i = 0; i < numbers.size(); i++) {
        temp += numbers[i];
    }
    
    answer = temp / numbers.size();
    return answer;
}