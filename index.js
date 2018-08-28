// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  const firstTwo = drivers.slice(0, 2)
  return firstTwo
}

const returnLastTwoDrivers = function(drivers) {
  const lastTwo = drivers.slice(-2)
  return lastTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
  return function(fare) {
    return fare * int
  }
}

function fareDoubler(fare) {
  const double = createFareMultiplier(2)
  return double(fare)
}

function fareTripler(fare) {
  const triple = createFareMultiplier(3)
  return triple(fare)
}

const selectDifferentDrivers = function (drivers, selectDrivers) {
  return selectDrivers(drivers)}
  