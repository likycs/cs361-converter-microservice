# cs361-converter-microservice
This is a microservice that receives a body with the desired conversion format and number and returns then converted number.

## How to REQUEST Data
The conversion app is currently deployed on https://cs361-conversion-microservice.herokuapp.com/. Requesting data can be done by sending a HTTP post request with the following format:
{
  "convertTo": ("lbs" or "kg"),
  "number": (any number)
}
This assumes you are converting from kilograms(kg) to pounds(lbs) or vice-versa. Valid values for convertTo must be either "kg" or "lbs" and the only valid values for Number are numbers.

## How to RECEIVE Data
A response will be a json object containing a convertedFrom property with the value of what it was converted from and a number property containing the converted number value.

It will look like:
{
  "convertedFrom": ("lbs" or "kg"),
  "number": (any number)
}

Any invalid properties/values will result in an error message.

## UML Sequence Diagram
![](https://ibb.co/WzdjQS7)
