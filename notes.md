### Type Annotations
- Code we add to tell Typescript what type of value a variable will refer to
    - When to use?
        - When we declare a variable on one line then initialize later
        - When we want a variable to have a type that can't be inferred
        - When a function returns the "any" type and we need to clarify the value
### Type Inference
- Typescript tries to figure out what type of value a variable refers to
    - When to use? Always!
### Types
- Primative Types
    - number
    - boolean
    - void
    - undefined
    - string
    - symbol
    - null
- Object Types
    - functions
    - arrays
    - classes
    - objectss

### Notes about Arrays:
- TS can do type inference when extracting values from Array
- TS can prevent us from adding incompatible values to Array
- We can get help with 'map', 'forEach', 'reduce' functions
- Flexible - arrays can still contain multiple different types