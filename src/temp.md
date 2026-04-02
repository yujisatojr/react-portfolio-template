Might be a bit late to reply to this issue but it's better later than never.

As Kyazs said, in the index.scss file, explicitely define .dark-mode as the inverse of .light-mode and add the following attributes in both light and dark mode.

The following sample is for light mode, so inverse the colors for the dark mode :

```scss
.MuiInputBase-root {
  color: #0d1116 !important;
  background-color: white !important;
}

.MuiInputBase-input {
  color: #0d1116 !important;
  background-color: transparent !important;
}

.MuiFormLabel-root {
  color: #0d1116 !important;
}

.MuiFormHelperText-root {
  color: #0d1116 !important;
}
```

This overrides the material UI used by default.
And in Contact.scss modify the background color of `fieldset` to `transparent`.
So from this :

```scss
fieldset {
  background-color: white;
}
```

To this :

```scss
fieldset {
  background-color: transparent;
}
```

In the end, this should look like this :

- Dark mode :
  ![Image](https://github.com/user-attachments/assets/6fc82bbc-ac3e-41e4-9ffe-b8563fa91369)
- Light mode :
  ![Image](https://github.com/user-attachments/assets/3fcb8893-2c19-45d2-9bd8-c969aa8a1e4d)

Hope I helped you, have a good day :)
