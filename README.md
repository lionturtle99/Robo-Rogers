# _Mr. Roborogers neighborhood_

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)

#### By _**Liam Eller**_

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)

#### _Takes inputted number and returns it's value with certain numbers replaced with words._

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Javascript_
* _jQuery_
* _VS Code_
* _git github_
* _zsh terminal_

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)

## Description

_Takes inputted number and returns it's value from 0-x but replacing any number containing a 1 with "Beep!", superseded by the number 2 with "Boop!", superseded by the number 3 with "Won't you be my neighbor?"._

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)

## Setup/Installation Requirements

* _To download onto your personal device: Click the green "Code" button in the top right of the github repository, from the dropdown, select the "Download Zip" option, Once the file has finished downloading, navigate to your computers downloads and right click, select open with Archive Utility for macs (or whatever un-compress application your computer has), open file directory and open index.html in your browser or text editor application._

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)

## Known Bugs

_None_

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)

## Test Driven Development

__Describe roborogers__

__Test:__ _It should return an array with a 0 if the number 0 is inputted_
__Code:__ _roborogers(0)_
__Expected Output:__ _0_

__Test:__ _It should take a string and change it into an array of numbers_
__Code:__ _array = parseInt([ string ]);_
__Expected Output:__ _array[ 0 ]_

__Test:__ _It should loop the value of an integer, return an array of the looped integer_
__Code:__ _array[ 5 ]_
__Expected Output:__ _loopedArray[0, 1, 2, 3, 4, 5]_

__Test:__ _It should check if the value of the index is a 1 2 or 3_
__Code:__ _if (itoString().includes('3')) { ... }_
__Expected Output:__ _true_

__Test:__ _It should replace the number 3 with Won't you be my neighbor?_
__Code:__ _Array[0, 1, 2, 3, 4, 5]_
__Expected Output:__ _loopedArray[0, 1, 2, "won't you be my neighbor?, 4, 5]_

__Test:__ _It should should replace the number 3 with Won't you be my neighbor? and 2 with boop_ 
__Code:__ _Array[0, 1, 2, 3, 4, 5]_
__Expected Output:__ _loopedArray[0, 1, "boop", "won't you be my neighbor?", 4, 5]_

__Test:__ _It should replace the number 3 with Won't you be my neighbor?, 2 with Boop and 1 with Beep_ 
__Code:__ _array[0, 1, 2, 3, 4, 5]_
__Expected Output:__ _loopedArray[0, "beep", "boop", "won't you be my neighbor?, 4, 5]_

__Test:__ _If should replace any number in the loop containing a 3 with Won't you be my neighbor?_
__Code:__ _13_
__Expected output:__ _Won't you be my neighbor?_

__Test:__ _If should replace any number in the loop containing a 2 and with boop unless that number contains a 3_
__Code:__ _12_
__Expected output:__ _boop_

__Test:__ _If should replace any number in the loop containing a 1 and with beep unless that number contains a 3 or 2_
__Code:__ _11_
__Expected output:__ _beep_

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)

## License

_[MIT](https://opensource.org/licenses/MIT)_

Copyright (c) _Date_ _01/21/2022_ _by:Liam Eller_