describe('SolveProblem([1, 2, 3, 4, 5])', function() {
    it('should return [120, 60, 40, 30, 24]', function() {
        expect(SolveProblem([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
    });
});

describe('SolveProblem([3, 2, 1])', function() {
    it('should return [2, 3, 6]', function() {
        expect(SolveProblem([3, 2, 1])).toEqual([2, 3, 6]);
    });
});

describe('SolveProblem([0, 1, 1, 0, 1, 1, 1, 1, 1])', function() {
    it('should return [0, 0, 0, 0, 0, 0, 0, 0, 0]', function() {
        expect(SolveProblem([0, 1, 1, 0, 1, 1, 1, 1, 1])).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });
});

describe('SolveProblem([3, 2, 0])', function() {
    it('should return [0, 0, 6]', function() {
        expect(SolveProblem([3, 2, 0])).toEqual([0, 0, 6]);
    });
});

describe('SolveProblem([1]', function(){
    it('should throw a "Array not valid for problem" exception', function() {
        try{
            expect(SolveProblem([1])).toThrowError("Array not valid for problem");
        }
        catch(e) {
            //Do nothing...
        }
    });
});

describe('SolveProblemFollowUp([1, 2, 3, 4, 5])', function() {
    it('should return [120, 60, 40, 30, 24]', function() {
        expect(SolveProblemFollowUp([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
    });
});

describe('SolveProblemFollowUp([3, 2, 1])', function() {
    it('should return [2, 3, 6]', function() {
        expect(SolveProblemFollowUp([3, 2, 1])).toEqual([2, 3, 6]);
    });
});

describe('SolveProblemFollowUp([0, 1, 1, 0, 1, 1, 1, 1, 1])', function() {
    it('should return [0, 0, 0, 0, 0, 0, 0, 0, 0]', function() {
        expect(SolveProblemFollowUp([0, 1, 1, 0, 1, 1, 1, 1, 1])).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });
});

describe('SolveProblemFollowUp([3, 2, 0])', function() {
    it('should return [0, 0, 6]', function() {
        expect(SolveProblemFollowUp([3, 2, 0])).toEqual([0, 0, 6]);
    });
});

describe('SolveProblemFollowUp([1]', function(){
    it('should throw a "Array not valid for problem" exception', function() {
        try{
            expect(SolveProblemFollowUp([1])).toThrowError("Array not valid for problem");
        }
        catch(e) {
            //Do nothing...
        }
    });
});