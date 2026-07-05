Set shell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")
scriptDir = fso.GetParentFolderName(WScript.ScriptFullName)
projectDir = fso.GetParentFolderName(scriptDir)
nodePath = "C:\Users\jishuyuan\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"

shell.CurrentDirectory = projectDir
shell.Run """" & nodePath & """ """ & projectDir & "\scripts\serve-dist.mjs""", 0, False
