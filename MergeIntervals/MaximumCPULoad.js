// Question
// We are given a list of Jobs. Each job has a Start time, an End time, and a CPU load when it is running. Our goal is to find the maximum CPU load at any time if 
// all the jobs are running on the same machine.

// Jobs: [[1,4,3], [2,5,4], [7,9,6]]
// Output: 7


// Time complexity O(nlogn) from sorting the intervals
// Space complexity O(n) from storing the result;
const Heap = require('collections/heap');

class Job 
{
    constructor(start, end, cpu_load) 
    {
        this.start = start;
        this.end = end;
        this.cpu_load = cpu_load;
      }
}

const findMaxCPULoad = function (jobs)
{
    if (jobs.length === 0) return 0;
    else if (jobs.length === 1) return jobs[0].cpu_load;

    jobs.sort((a, b) => {
        if (a.start < b.start) return a.start - b.start;
        else return a.end - b.end;
    });

    const minHeap = new Heap([jobs[0]], null, (a, b) => {
        a.end - b.end;
    });

    let currentLoadTime = jobs[0].cpu_load;
    let maxLoadTime = currentLoadTime;

   // console.log(minHeap.toJSON())

    for (let i = 1; i < jobs.length; i++)
    {
        let currentJob = jobs[i];
        
        while (minHeap.length > 0)
        {
            let previousJob = minHeap.peek();
            
            if (previousJob.end < currentJob.start)
            {
                currentLoadTime -= previousJob.cpu_load;
                minHeap.pop();
            }
            else 
            {
                break;
            }
        }

        minHeap.push(currentJob);
        currentLoadTime += currentJob.cpu_load;
        maxLoadTime = Math.max(maxLoadTime, currentLoadTime);
    }
    
    return currentLoadTime;
}

console.log(`Maximum CPU load at any time: ${findMaxCPULoad(
    [new Job(1, 4, 3), new Job(2, 5, 4), new Job(7, 9, 6)])}`)
console.log(`Maximum CPU load at any time: ${findMaxCPULoad(
    [new Job(6, 7, 10), new Job(2, 4, 11), new Job(8, 12, 15)])}`)
console.log(`"Maximum CPU load at any time: ${findMaxCPULoad(
    [new Job(1, 4, 2), new Job(2, 4, 1), new Job(3, 6, 5)])}`)

//console.log(`For input [${input}] maximum load time is ${findMaxCPULoad(input)} `);