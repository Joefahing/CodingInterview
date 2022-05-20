// Question Employee Free Time 
// For ‘K’ employees, we are given a list of intervals representing the working hours of each employee. Our goal is to find out if there is a free interval that is common to all employees. 
// You can assume that each list of employee working hours is sorted on the start time.

// Input: Employee Working Hours=[[[1,3], [5,6]], [[2,3], [6,8]]]
// Output: [3,5]
// Explanation: Both the employees are free between [3,5].



class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    get_interval() {
        return "[" + this.start + ", " + this.end + "]";
    }
};

const find_employee_free_time = function (schedule) {

    if (schedule.length === 0) return [];

    result = [];

    const mergedSchedule = merge(schedule);
    let currentEnd = mergedSchedule[0].end;

    for (let i = 1; i < mergedSchedule.length; i++) {
        if (currentEnd < mergedSchedule[i].start) {
            result.push(new Interval(currentEnd, mergedSchedule[i].start));
        }

        currentEnd = mergedSchedule[i].end;
    }

    return result;
};

const merge = function (schedule) {
    const workHours = [];
    const mergedHours = [];

    for (let i = 0; i < schedule.length; i++) {
        workHours.push(...schedule[i]);
    }

    workHours.sort((a, b) => {
        if (a.start < b.start) return a.start - b.start;
        else return a.end - b.end;
    });

    let currentInterval = schedule[0];
    for (let j = 1; j < workHours.length; j++) {
        if (currentInterval.end < workHours[j].start) {
            // console.log(currentInterval)
            mergedHours.push(new Interval(currentInterval.start, currentInterval.end));
            currentInterval.start = workHours[j].start;
        }

        currentInterval.end = workHours[j].end;
    }
    mergedHours.push(new Interval(currentInterval.start, currentInterval.end));

    return mergedHours;
}


input = [[new Interval(1, 3), new Interval(5, 6)], [
    new Interval(2, 3), new Interval(6, 8)]];
intervals = find_employee_free_time(input)
result = "Free intervals: ";
for (i = 0; i < intervals.length; i++)
    result += intervals[i].get_interval();
console.log(result);


input = [[new Interval(1, 3), new Interval(9, 12)], [
    new Interval(2, 4)], [new Interval(6, 8)]];
intervals = find_employee_free_time(input)
result = "Free intervals: ";
for(i=0; i < intervals.length; i++)
  result += intervals[i].get_interval();
console.log(result);

input = [[new Interval(1, 3)], [
    new Interval(2, 4)], [new Interval(3, 5), new Interval(7, 9)]];
intervals = find_employee_free_time(input)
result = "Free intervals: ";
for(i=0; i < intervals.length; i++)
  result += intervals[i].get_interval();
console.log(result);
