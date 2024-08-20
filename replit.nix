{ pkgs }: {
  deps = [
    pkgs.got
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
}