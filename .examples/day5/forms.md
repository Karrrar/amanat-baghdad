1.  **`id`**:

    - **Purpose**: The `id` attribute uniquely identifies an HTML element within the document.
    - **Usage**: Often used to link a `<label>` to an `<input>` for accessibility (using the `for` attribute) and to target elements with CSS or JavaScript.
    - **Example**:

      ```html
      <label for="username">Username:</label>
      <input type="text" id="username" />
      ```

2.  **`name`**:

    - **Purpose**: The `name` attribute specifies the key used when the form data is submitted. It groups input elements together if they share the same `name`, such as in radio buttons.
    - **Usage**: Essential for form processing, as it determines the field name in the data sent to the server.
    - **Example**:

      ```html
      <input type="text" name="username" />
      ```

3.  **`value`**:

    - **Purpose**: The `value` attribute defines the initial value of the input element. For text inputs, this is the pre-filled text; for buttons, it's the text shown on the button; and for checkboxes or radio buttons, it's the value sent when the form is submitted if the input is selected.
    - **Usage**: Can be pre-filled by default and also dynamically modified by scripts.
    - **Example**:

      ```html
      <input type="text" name="username" value="JohnDoe" />
      <input type="radio" name="gender" value="male" />
      ```

4.  **Placeholder**: The `placeholder` attribute provides a short, descriptive text that appears inside an input field or textarea before the user enters a value. It serves as a hint or example of what kind of input is expected. The placeholder text disappears as soon as the user starts typing. Example: `<input type="text" placeholder="Enter your name">`

---

**Text Input (`text`)**: Allows users to enter a single line of text. Example: `<input type="text">`

**Password Input (`password`)**: Masks the input, typically used for entering passwords. Example: `<input type="password">`

**Email Input (`email`)**: Validates that the input is a properly formatted email address. Example: `<input type="email">`

**Number Input (`number`)**: Restricts input to numerical values, with optional min, max, and step attributes. Example: `<input type="number">`

**Date Input (`date`)**: Provides a date picker for selecting a date. Example: `<input type="date">`

**File Input (`file`)**: Allows users to select a file from their device to upload. Example: `<input type="file">`

**Checkbox (`checkbox`)**: Lets users select multiple options from a set; each checkbox can be checked or unchecked. Example: `<input type="checkbox">`

**Radio Button (`radio`)**: Allows users to select one option from a set; only one radio button in a group can be selected at a time. Example: `<input type="radio">`

**Range Input (`range`)**: Lets users select a value from a specified range by dragging a slider. Example: `<input type="range">`

**Color Input (`color`)**: Provides a color picker for selecting a color. Example: `<input type="color">`

**Search Input (`search`)**: Similar to a text input but optimized for search queries, often with additional features like a clear button. Example: `<input type="search">`

**URL Input (`url`)**: Validates that the input is a properly formatted URL. Example: `<input type="url">`

**Textarea (`<textarea>`)**: Allows users to enter multi-line text. Example: `<textarea></textarea>`

**Select Dropdown (`<select>`)**: Presents a list of options in a dropdown menu, from which users can select one or more options. Example: `<select id="select-input" name="select-input"><option value="">Select an option</option></select>`
