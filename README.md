# Intro

This is a game I am making in web JS. Idk what it will be, but I want it to be like a platformer.

# Name TBD
Inspirations:
- ninja painter
- Super Mario Wii U
- Geometry dash

movement pipeline:
1. person presses key
2. new position calculated
3. position goes to collision checker
4. if it fails collision check, values return a code
5. depending on code, event happens
   move event: player moves
   death event: player dies
   world collision event: player movement is cancelled