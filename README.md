# Local Bridge Connect (66)

Build a marketplace platform named "Local Bridge" that connects local micro-business owners (bakeries, cafes) with student web developers. 

CRITICAL UI & LAYOUT INSTRUCTION (Anti-AI Aesthetic):

Do NOT build a generic, cluttered SaaS dashboard with top banners or left-side navigation links. The UI must be hyper-minimalist, stark, and structured like an elegant bento grid or modern editorial portfolio site. 

- Theme: Ultra-clean, premium minimalism. Low-density layouts with extensive whitespace.

- Typography: Large, high-contrast, bold typography juxtaposed with clean sans-serif body text.

- Color Palette: Pure off-white/cream backgrounds, stark true-black text/borders, and subtle slate gray dividers. Accent colors should be highly restrained (e.g., an organic green or deep clay tint used only for key status indicators or primary call-to-actions).

- Grid Layout: Use a clean, asymmetry-balanced grid of flat, bordered panels (no soft box-shadows, use sharp border strokes or solid block shadows). Every card, data point, or form must sit inside its own clean, uncluttered compartment.

Implement three user views accessible through a single clean login router:

1. THE LANDING HOME

- A stark, high-typography header: "Local Bridge." 

- Two minimalist split sections or cards side-by-side: Left card for Business Owners ("Get a visual website. $50 setup + $39/mo. 0% Commission."), Right card for Students ("Build real projects. Gain verified portfolio proof + a stipend.").

- Simple, high-contrast input buttons to enter the platform.

2. SHOPKEEPER VIEW (The Clean Dashboard)

- A beautifully minimal onboarding panel: A crisp, step-by-step text field area to upload their Menu/Images, business name, and category. 

- Sprint Progress Grid: A single, long horizontal progress bar or a set of clean blocks indicating current status (Matched -> Building -> Quality Check -> Live). 

- Request Box: A single, large text field where the business owner can type a direct update request (e.g., "Change croissant price to $4") without dealing with complex dashboard settings.

3. STUDENT VIEW (The Portfolio & Workspace)

- Profile Grid: A minimalist card displaying the student's name, university, and clean links to active websites they have launched on the platform.

- The Marketplace Board: A clean list of available local businesses organized as simple, clickable rows or clean cards showing the shop's name and style preference. Includes a stark "Request Match" button.

- Workspace Module: A simple panel showing the matched shop's uploaded data and assets side-by-side with a final text box to submit the completed website link to the Admin.

4. ADMIN VIEW (The Control Panel)

- Dual Grid System: 

  - Left Panel (Matches): Displays pending businesses paired with student requests, featuring a clean "Approve Match" button.

  - Right Panel (QA & Payouts): A clean queue showing finished student submissions. Each row has a clear button to "Approve & Deploy to Cloud" or "Send back with notes", alongside a simple counter tracking the $39/mo revenue pool and student stipend releases.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0fb3579e-921b-40c6-adda-dd448ebf412c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
