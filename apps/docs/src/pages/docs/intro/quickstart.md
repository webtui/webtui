---
layout: "@/layouts/Doc.astro"
title: Quickstart
order: 1
---

Work in progress btw

This is a test

You should be able to navigate through basic markdown elements with the keyboard

Here is a list

- Item 1
- Item 2
- Item 3

<div box-="square">
    <ul>
        <li>Should not be higlighted</li>
        <li>(is arbitrary html, not markdown)</li>
    </ul>
</div>

And a list with nested items

How about a paragraph with a [link](https://example.com)?

## Here is an h2

And a paragraph with `inline code`, which should not be focusable

```python
# Comment showing different elements

# Numbers and operators
integer = 42
float_num = 3.14159
complex_num = 1 + 2j

# Strings and formatting
single_quote = 'I\'m a string'
double_quote = "Double quoted"
f_string = f"Value is {integer}"
multi_line = """
    Multiple
    Lines
"""

# Booleans and None
is_true = True
is_false = False
nothing = None

# Collections
my_list = [1, 2, 3]
my_dict = {'key': 'value'}
my_set = {1, 2, 3}
my_tuple = (1, 2, 3)

# Functions and classes
def example_func(param: str) -> str:
    """Docstring for function"""
    return param.upper()

class ExampleClass:
    def __init__(self):
        self.property = "instance var"

# Exception handling
try:
    raise ValueError("Error message")
except Exception as e:
    print(f"Caught: {e}")
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
