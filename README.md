# Objective2
This is React Native version of Redux tutorial(http://rackt.org/redux/docs/basics/ExampleTodoList.html).

9th March 2016 - Updated application from react-native 0.14.1 to 0.21.0

## License
MIT

## Installation
```
npm install  
react-native run-android  
(have android emulator or device plugged in)  
./adb reverse tcp:8081 tcp:8081 (likely required for physical android device)  
(shake android device or press menu)
(select 'reload JS')
```

## Future Implementations
1. Able to toggle todo between 'active' and 'completed
1. Persistent data storage
1. Accounts system
1. Cloud data sync
1. Improve UI
1. Redefine todo as a "task"? (Necessary?)
1. Increase the amount of states of a task (include 'In-Progress', 'Limbo')
