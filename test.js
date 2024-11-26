// test.js

function runTests() {
    // Example test 1: Check if 1 + 2 equals 3
    if (1 + 2 !== 3) {
        console.error('Test 1 Failed: 1 + 2 does not equal 3');
        return false;  // Test failed
    }

    // Example test 2: Check if the app title is correct
    const title = 'My Web App';  // Replace with actual title check if necessary
    if (title !== 'My Web App') {
        console.error('Test 2 Failed: Title is incorrect');
        return false;  // Test failed
    }

    console.log('All tests passed!');
    return true;  // All tests passed
}

runTests();
