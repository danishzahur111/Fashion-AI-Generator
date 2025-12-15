// src/utils/generators.js

// Function to generate a single, high-fidelity AI image prompt
const generateSinglePrompt = ({
    theme, 
    character, 
    brand, 
    season, 
    message, 
    shotType, 
    publication,
    designers
}) => {
    // 1. Theme and Mood Keywords
    const moodKeywords = theme.mood.join(', ');
    const environment = theme.environment[Math.floor(Math.random() * theme.environment.length)];
    const lighting = theme.lighting[Math.floor(Math.random() * theme.lighting.length)];
    const color = theme.colorPalette[Math.floor(Math.random() * theme.colorPalette.length)];

    // 2. Character Description
    const distinctiveFeatures = character.distinctiveFeatures && character.distinctiveFeatures.length > 0
        ? `, distinctive features like: ${character.distinctiveFeatures.join(', ')}`
        : '';
        
    const characterDescription = `${character.gender} model, ${character.age}, ${character.bodyType}, posed in a ${character.pose}, with a ${character.expression} expression, ${character.hairDescription} and ${character.eyeCharacteristics}, wearing ${character.fashionAesthetic} apparel.`;

    // 3. Campaign & Styling Details
    const stylingDetails = `${brand} ${season} collection, styled by ${designers || 'leading fashion stylist'}, focused on a central theme of '${message}', published in ${publication || 'Vogue'}.`;
    
    // 4. Photographic Style (High Quality Modifiers)
    const photographicStyle = `Shot type: ${shotType}, professional editorial photography, ${lighting} lighting, ultra-detailed, high-contrast, cinematic, 8k, --ar 16:9 --style 4c`;

    // Assemble the final prompt
    const finalPrompt = [
        stylingDetails,
        characterDescription,
        `${shotType} of the subject in a/an ${environment}, dominated by the color ${color}.`,
        `Mood: ${moodKeywords}.`,
        photographicStyle
    ].filter(Boolean).join(' | ');

    return finalPrompt;
};

// Main function to generate the campaign (a set of prompts)
export const generateCampaign = ({
    brand,
    season,
    message,
    subSystem, // Contains niche and theme
    character,
    shotTypes, // Array of required shot types
    publication,
    designers
}) => {
    return shotTypes.map((shotType) => {
        const promptString = generateSinglePrompt({
            theme: subSystem.theme,
            character,
            brand,
            season,
            message,
            shotType,
            publication,
            designers
        });

        return {
            shotType,
            brand,
            season,
            message,
            character,
            theme: subSystem, // Pass the whole subsystem for the results page summary
            prompt: promptString,
        };
    });
};
