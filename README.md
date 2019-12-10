# svz-modal

This module is for creating a simple, intuitive modal for use in any React application. 

## Getting Started

### Installation
To install, in terminal type

```
	npm i --save svz-modal
```

then, in your react project,

```
import svz-modal from 'svz-modal';
```  

or  

```
import Modal from 'svz-modal';
```  


and finally, implement it by including that component within your code:

```
<Modal
	{options}
>
	{children}
</Modal
```

# Modal
<details><summary>The Modal component operates as a wrapper that renders <strong>children</strong> and has a few different behaviors depending on the props <strong>onChange</strong>, <strong>noEsc</strong>, <strong>closeButton</strong>, <strong>className</strong> and <strong>superModal</strong>.</summary>
<p>

### children
The children of the **Modal** element determine the content of the **Modal** when it is active.

### active
**Type: Boolean**  
If this is true, the **Modal** is visible. If it is false, the **Modal** is not.  

### noEsc
**Type: Boolean**  
Optional variable, if set to **true**, hitting **esc** does not close the **Modal**  

### closeButton
**Type: Boolean** || **String** || **Element**  
Determines if an exit button is in the top right corner of the **Modal**. If this is set to **true**, it renders a small x button. If it is a **String**, it renders that string in a button. If it is an **Element**, it uses that **Element** as the button content instead.

### className
**Type: String** || **Array**  
This can be either a normal **String** or an array containing **String** variables or pairs of [**String**, **Boolean**], where the **Boolean** determines if said **String** is included or disincluded.

### superModal
**Type: Boolean**  
If this is set to true, the **Modal** will have a higher **z-index** than other **Modal** elements.

</p></details>

## Author
* **Colin Brennan** - *full project* - [SysVisionz Github](https://github.com/SysVisionz), [SysVisionz NPM Modules](https://www.npmjs.com/~sysvisionz)

## Version History
1.0 -   
initial release