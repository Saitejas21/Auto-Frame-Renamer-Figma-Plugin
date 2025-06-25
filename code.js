"use strict";
figma.showUI(__html__, { width: 300, height: 100 });
figma.ui.onmessage = (msg) => {
    if (msg.type === 'rename-frames') {
        const selection = figma.currentPage.selection;
        if (selection.length === 0) {
            figma.notify("Please select frames to rename!");
            figma.closePlugin();
            return;
        }
        // Filter only FrameNodes from the selection
        const selectedFrames = selection.filter(node => node.type === "FRAME");
        if (selectedFrames.length === 0) {
            figma.notify("No frames selected!");
            figma.closePlugin();
            return;
        }
        // Sort selected frames left-to-right based on x position
        const sortedFrames = selectedFrames.sort((a, b) => a.x - b.x);
        // Rename them sequentially
        for (let i = 0; i < sortedFrames.length; i++) {
            sortedFrames[i].name = `${i + 1}`;
        }
        figma.notify("Selected frames renamed left to right 💫");
        figma.closePlugin();
    }
};
