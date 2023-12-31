const { Notification } = require("electron");
const path = require("path");

function showNotification() {
  const notification = new Notification({
    title: "New Text File Notification",
    subtitle: "Subtitle of the notification",
    body: "Hello, this is from the new text file",
    silent: false,
    icon: path.join(__dirname, "../image.jpg"),
    closeButtonText: "Close Button",
    urgency: "critical",
  });
  notification.show();
}

const template = [
  {
    label: "File",
    submenu: [
      {
        label: "New Text File",
        click: () => {
          showNotification();
        },
      },
      {
        label: "New File...",
      },
      {
        label: "New Window",
      },
      {
        type: "separator",
      },
      {
        label: "Open File...",
      },
      {
        label: "Open Folder...",
      },
      {
        label: "Open Workspace from File...",
      },
      {
        label: "Open Recent",
      },
      {
        type: "separator",
      },
      {
        label: "Add Folder to Workspace...",
      },
      {
        label: "Set Workspace As...",
      },
      {
        label: "Duplicate Workspace",
      },
      {
        type: "separator",
      },
      {
        label: "Save",
      },
      {
        label: "Save As...",
      },
      {
        label: "Save All",
      },
      {
        type: "separator",
      },
      {
        label: "Share",
        submenu: [
          {
            label: "Export Profile (Default)...",
          },
          {
            label: "Import Profile...",
          },
        ],
      },
      {
        type: "separator",
      },
      {
        label: "Auto Save",
      },
      {
        label: "Preferences",
        submenu: [
          {
            label: "Profile (Default)",
            submenu: [
              {
                label: "Default",
              },
              {
                type: "separator",
              },
              {
                label: "Show Profile Content",
              },
              {
                type: "separator",
              },
              {
                label: "Create Profile...",
              },
              {
                label: "Delete Profile...",
              },
              {
                type: "separator",
              },
              {
                label: "Export Profile...",
              },
              {
                label: "Import Profile...",
              },
            ],
          },
          {
            label: "Settings",
          },
          {
            label: "Extensions",
          },
          {
            label: "Keyboard Shortcuts",
          },
          {
            label: "Configure User Snippets",
          },
          {
            label: "User Tasks",
          },
          {
            label: "Themes",
            submenu: [
              {
                label: "Color Theme",
              },
              {
                label: "File Icon Theme",
              },
              {
                label: "Product Icon Theme",
              },
            ],
          },
          {
            type: "separator",
          },
          {
            label: "Online Services Settings",
          },
          {
            type: "separator",
          },
          {
            label: "Backup and Sync Settings...",
          },
        ],
      },
      {
        type: "separator",
      },
      {
        label: "Revert File",
      },
      {
        label: "Close File",
      },
      {
        label: "Close Folder",
      },
      {
        label: "Close Window",
        role: "close",
      },
      {
        type: "separator",
      },
      {
        label: "Exit",
        role: "quit",
      },
    ],
  },
  {
    label: "Edit",
    submenu: [
      {
        label: "Undo",
        role: "undo",
      },
      {
        label: "Redo",
        role: "redo",
      },
      {
        type: "separator",
      },
      {
        label: "Cut",
        role: "cut",
      },
      {
        label: "Copy",
        role: "copy",
      },
      {
        label: "Paste",
        role: "paste",
      },
      {
        type: "separator",
      },
      {
        label: "Find",
      },
      {
        label: "Replace",
      },
      {
        type: "separator",
      },
      {
        label: "Find in Files",
      },
      {
        label: "Replace in Files",
      },
      {
        type: "separator",
      },
      {
        label: "Toggle Line Comment",
      },
      {
        label: "Toggle Block Comment",
      },
      {
        label: "Emmet: Expand Abbreviation",
      },
    ],
  },
  {
    label: "Selection",
    submenu: [
      {
        label: "Select All",
        role: "selectAll",
      },
      {
        label: "Expand Selection",
      },
      {
        label: "Shrink Selection",
      },
      {
        type: "separator",
      },
      {
        label: "Copy Line Up",
      },
      {
        label: "Copy Line Down",
      },
      {
        label: "Move Line Up",
      },
      {
        label: "Move Line Down",
      },
      {
        label: "Duplicate Selection",
      },
      {
        type: "separator",
      },
      {
        label: "Add Cursor Above",
      },
      {
        label: "Add Cursor Below",
      },
      {
        label: "Add Cursors to Line Ends",
      },
      {
        label: "Add Next Occurence",
      },
      {
        label: "Add Previous Occurence",
      },
      {
        label: "Select All Occurences",
      },
      {
        type: "separator",
      },
      {
        label: "Switch to ctrl+click for Multi-Cursor",
      },
      {
        label: "Column Selection Mode",
      },
    ],
  },
  {
    label: "View",
    submenu: [
      {
        label: "Command Palette...",
      },
      {
        label: "Open View...",
      },
      {
        type: "separator",
      },
      {
        label: "Appearance",
        submenu: [
          {
            label: "Full Screen",
            role: "togglefullscreen",
          },
          {
            label: "Zen Mode",
          },
          {
            label: "Centered Layout",
          },
          {
            type: "separator",
          },
          {
            label: "Menu Bar",
          },
          {
            label: "Primary Side Bar",
          },
          {
            label: "Secondary Side Bar",
          },
          {
            label: "Status Bar",
          },
          {
            label: "Panel",
          },
          {
            type: "separator",
          },
          {
            label: "Move Primary Side Bar Right",
          },
          {
            label: "Activity Bar Position",
            submenu: [
              {
                label: "Side",
              },
              {
                label: "Top",
              },
              {
                label: "Hidden",
              },
            ],
          },
          {
            label: "Panel Position",
            submenu: [
              {
                label: "Bottom",
              },
              {
                label: "Left",
              },
              {
                label: "Right",
              },
            ],
          },
          {
            label: "Align Panel",
            submenu: [
              {
                label: "Center",
              },
              {
                label: "Justify",
              },
              {
                label: "Left",
              },
              {
                label: "Right",
              },
            ],
          },
          {
            label: "Tab Bar",
            submenu: [
              {
                label: "Multiple Tabs",
              },
              {
                label: "Single Tabs",
              },
              {
                label: "Hidden",
              },
            ],
          },
          {
            label: "Editor Actions Position",
            submenu: [
              {
                label: "Tab Bar",
              },
              {
                label: "Title Bar",
              },
              {
                label: "Hidden",
              },
            ],
          },
          {
            type: "separator",
          },
          {
            label: "Minimap",
          },
          {
            label: "Breadcrumbs",
          },
          {
            label: "Sticky Scroll",
          },
          {
            label: "Renderer Whitespace",
          },
          {
            label: "Renderer Control Characters",
          },
          {
            type: "separator",
          },
          {
            label: "Zoom In",
            role: "zoomIn",
          },
          {
            label: "Zoom Out",
            role: "zoomOut",
          },
          {
            label: "Reset Zoom",
            role: "resetZoom",
          },
        ],
      },
      {
        label: "Editor Layout",
        submenu: [
          {
            label: "Split Up",
          },
          {
            label: "Split Down",
          },
          {
            label: "Split Left",
          },
          {
            label: "Split Right",
          },
          {
            type: "separator",
          },
          {
            label: "Split in Group",
          },
          {
            type: "separator",
          },
          {
            label: "Move Editor into New Window",
          },
          {
            label: "Copy Editor into New Window",
          },
          {
            type: "separator",
          },
          {
            label: "Single",
          },
          {
            label: "Two Columns",
          },
          {
            label: "Three Columns",
          },
          {
            label: "Two Rows",
          },
          {
            label: "Three Rows",
          },
          {
            label: "Grid (2x2)",
          },
          {
            label: "Two Rows Right",
          },
          {
            label: "Two Columns Bottom",
          },
          {
            type: "separator",
          },
          {
            label: "Flip Layout",
          },
        ],
      },
      {
        type: "separator",
      },
      {
        label: "Explorer",
      },
      {
        label: "Search",
      },
      {
        label: "Source Control",
      },
      {
        label: "Run",
      },
      {
        label: "Extensions",
      },
      {
        type: "separator",
      },
      {
        label: "Problems",
      },
      {
        label: "Output",
      },
      {
        label: "Debug Console",
      },
      {
        label: "Terminal",
      },
      {
        type: "separator",
      },
      {
        label: "Word Wrap",
      },
    ],
  },
  {
    label: "Go",
    submenu: [
      {
        label: "Back",
      },
      {
        label: "Forward",
      },
      {
        label: "Last Edit Location",
      },
      {
        type: "separator",
      },
      {
        label: "Switch Editor",
        submenu: [
          {
            label: "Next Editor",
          },
          {
            label: "Previous Editor",
          },
          {
            type: "separator",
          },
          {
            label: "Next Used Editor",
          },
          {
            label: "Previous Used Editor",
          },
          {
            type: "separator",
          },
          {
            label: "Next Editor in Group",
          },
          {
            label: "Previous Editor in Group",
          },
          {
            type: "separator",
          },
          {
            label: "Next Used Editor in Group",
          },
          {
            label: "Previous Used Editor in Group",
          },
        ],
      },
      {
        label: "Switch Group",
        submenu: [
          {
            label: "Group 1",
          },
          {
            label: "Group 2",
          },
          {
            label: "Group 3",
          },
          {
            label: "Group 4",
          },
          {
            label: "Group 5",
          },
          {
            type: "separator",
          },
          {
            label: "Next Group",
          },
          {
            label: "Previous Group",
          },
          {
            type: "separator",
          },
          {
            label: "Group Left",
          },
          {
            label: "Group Right",
          },
          {
            label: "Group Above",
          },
          {
            label: "Group Below",
          },
        ],
      },
      {
        type: "separator",
      },
      {
        label: "Go to File...",
      },
      {
        label: "Go to Symbol in Workspace...",
      },
      {
        type: "separator",
      },
      {
        label: "Go to Symbol in Editor...",
      },
      {
        label: "Go to Definition",
      },
      {
        label: "Go to Declaration",
      },
      {
        label: "Go to Type Definition",
      },
      {
        label: "Go to Implementation",
      },
      {
        label: "Go to  References",
      },
      {
        type: "separator",
      },
      {
        label: "Go to Line/Column",
      },
      {
        label: "Go to Bracket",
      },
      {
        type: "separator",
      },
      {
        label: "Next Problem",
      },
      {
        label: "Previous Problem",
      },
      {
        type: "separator",
      },
      {
        label: "Next Change",
      },
      {
        label: "Previous Change",
      },
    ],
  },
  {
    label: "Run",
    submenu: [
      {
        label: "Start Debugging",
      },
      {
        label: "Start Without Debugging",
      },
      {
        label: "Stop Debugging",
      },
      {
        label: "Restart Debugging",
      },
      {
        type: "separator",
      },
      {
        label: "Open Configuration",
      },
      {
        label: "Add Configuration...",
      },
      {
        type: "separator",
      },
      {
        label: "Step Over",
      },
      {
        label: "Step into",
      },
      {
        label: "Step Out",
      },
      {
        label: "Continue",
      },
      {
        type: "separator",
      },
      {
        label: "Toggle Breakpoint",
      },
      {
        label: "New Breakpoint",
        submenu: [
          {
            label: "Conditional Breakpoint...",
          },
          {
            label: "Edit Breakpoint",
          },
          {
            label: "Inline Breakpoint",
          },
          {
            label: "Function Breakpoint...",
          },
          {
            label: "Logpoint...",
          },
        ],
      },
      {
        type: "separator",
      },
      {
        label: "Enable All Breakpoints",
      },
      {
        label: "Disable All Breakpoints",
      },
      {
        label: "Remove All Breakpoint",
      },
      {
        type: "separator",
      },
      {
        label: "Install Additional Debuggers",
      },
    ],
  },
  {
    label: ". . .",
    submenu: [
      {
        label: "Terminal",
        submenu: [
          {
            label: "New Terminal",
          },
          {
            label: "Split Terminal",
          },
          {
            type: "separator",
          },
          {
            label: "Run Task...",
          },
          {
            label: "Run Build Task...",
          },
          {
            label: "Run Active File",
          },
          {
            label: "Run Selected Text",
          },
          {
            type: "separator",
          },
          {
            label: "Show Running Tasks...",
          },
          {
            label: "Restart Running Task...",
          },
          {
            label: "Terminate Task...",
          },
          {
            type: "separator",
          },
          {
            label: "Configure Tasks...",
          },
          {
            label: "Configure Default Build Task...",
          },
        ],
      },
      {
        label: "Help",
        submenu: [
          {
            label: "Welcome",
          },
          {
            label: "Show All Commands",
          },
          {
            label: "Documentation",
          },
          {
            label: "Editor Playground",
          },
          {
            label: "Show Release Notes",
          },
          {
            type: "separator",
          },
          {
            label: "Keyboard Shortcuts Reference",
          },
          {
            label: "Video Tutorials",
          },
          {
            label: "Tips and Tricks",
          },
          {
            type: "separator",
          },
          {
            label: "Join us on Youtube",
          },
          {
            label: "Search Feature Request",
          },
          {
            label: "Report Issue",
          },
          {
            type: "separator",
          },
          {
            label: "View License",
          },
          {
            label: "Privacy Statement",
          },
          {
            type: "separator",
          },
          {
            label: "Toggle Developer Tools",
          },
          {
            label: "Open Process Explorer",
          },
          {
            type: "separator",
          },
          {
            label: "Click For Updates...",
          },
          {
            type: "separator",
          },
          {
            label: "About",
          },
        ],
      },
    ],
  },
];

module.exports = template;
