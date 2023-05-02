import * as vscode from 'vscode';
import * as fs from 'fs';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('iar-file-finder.helloWorld', () => {

		vscode.window.showInformationMessage('Hello World from IAR File Finder!');
	});

	myStatusBarItem.show();
	context.subscriptions.push(disposable);
	
}

const myStatusBarItem = vscode.window.createStatusBarItem();

let myVariable : string | undefined = 'Hello World' ;
myStatusBarItem.text = `My Variable: ${myVariable}`;
// read data from JSON file
const data = JSON.parse(fs.readFileSync('./u3_dict.json', 'utf8'));
// do something with the data

setInterval(() => {
    myVariable = vscode.window.activeTextEditor?.document.fileName.split('\\').pop()?.split('/').pop() ?? '';
    myStatusBarItem.text = `IAR Path: ${data[myVariable]}`;
}, 1000);

export function deactivate() {}
