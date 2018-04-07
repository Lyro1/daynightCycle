# Day Night Cycle

*A jQuery script which modify your background based on the time*

## Usage

This script as been made in *Javascript* and *jQuery*. You need then to add *jQuery* to the page on which the script will be executed.

Here is a sample of an empty page which is ready to run the script :

```
<!DOCTYPE html>
<html>

  <head>
    <title>Website</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="daynightCycle/daynightCycle.js"></script>
  </head>

  <body>

  </body>

</html>
```

To adapt the script to your requirements, you can tweak various settings:

- ***div*** : this is the element on your webpage on which the effect will be applied. By default, this setting targets the ```body``` tag. You can add any element, such as a ```.class``` or an ```#id```, but the effect will apply on the first element concerned.

- ***mode*** : The script will support various modes. Currently, the single mode available is the **gradient** mode, which update the background of the ***div*** with gradients which looks close to the sky at the time concerned. Other modes will be implemented later on.

## Credits

Script developped by LYRO. If you want to propose a new mode, improve a feature or correct a bug, don't hesitate to make a pull request. I will review it as soon as possible.

The gradients have been taken from [uiGradients.com](https://uigradients.com "uiGradients").

This script is distributed for free and for everyone. Feel free to use it on your website!
