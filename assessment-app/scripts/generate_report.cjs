const fetch = require('node-fetch');
const { jsPDF } = require('jspdf');
require('jspdf-autotable');
const fs = require('fs');
const path = require('path');

// --- THE RAW DATA FROM USER CHAT ---
const RAW_INPUT = `2026-04-01T05:43:30.183Z	RalphBot_1	Automated	ralph1@example.com		ATTENTION & FOCUS BEHAVIORS | WRITING & COMMUNICATION CLARITY BEHAVIORS | RELATIONAL & COLLABORATION BEHAVIORS | DECISION-MAKING & JUDGMENT BEHAVIORS | CURIOSITY & QUESTIONING BEHAVIORS	TECHNOLOGY RELATIONSHIP BEHAVIORS | SYSTEMS THINKING & COMPLEXITY NAVIGATION BEHAVIORS | LEARNING & ADAPTATION BEHAVIORS | EXPECTATION MANAGEMENT & COMMUNICATION BEHAVIORS | CHANGE LEADERSHIP & INFLUENCE BEHAVIORS	ETHICAL REASONING & VALUES ALIGNMENT BEHAVIORS | LANGUAGE AND FLUENCY | CROSS-SECTOR & CULTURAL INTELLIGENCE BEHAVIORS | FINANCIAL AWARENESS AND RESPONSIBILITES | LISTENING & PERCEPTION BEHAVIORS	MEETING & TIME MANAGEMENT BEHAVIORS | SOMATIC & EMBODIMENT BEHAVIORS | STRESS MANAGEMENT & RESILIENCE BEHAVIORS	Jumps to solution before understanding system | Defends original analysis even when system behavior contradicts it | Sees problems as isolated incidents, not patterns | Abandons complexity ("too complicated, let's narrow scope") | Cannot articulate second-order effects	Cannot hold multiple contradictory perspectives simultaneously | Applies same mental model to all contexts (one-size-fits-all) | Treats symptoms, not root causes | Focuses on single scale (misses cross-scale dynamics) | Does not anticipate how interventions might backfire — acts without Pre-Mortem analysis	Simplifies prematurely ("just do X") | Ignores feedback loops (surprised by unintended consequences)	Fills silence immediately after asking a question, preventing deep reflection from others | Addresses surface-level requests without exploring the underlying motivations or stakes | Asks leading questions (already has answer in mind) | Sticks to conventional, safe questions — never uses imaginative or generative inquiry | Does not question own assumptions	Defends positions rather than exploring alternatives | Stops inquiring once initial answer received | Assumes they know ("I already understand this") | Asks only clarifying questions (no elevating questions) | Does not listen to answers (performative questioning)	Answers questions instead of asking them | Sees questions as sign of weakness/ignorance | Accepts conventional wisdom without interrogation	Surprises stakeholders (no early warning of problems) | Lets scope creep without renegotiating | Blames external factors without owning their part | Assumes stakeholders understand intent without explicit alignment | Avoids difficult conversations about delays/problems	Does not revisit expectations as conditions change | Assumes alignment on expectations without checking — silent mismatches accumulate | Does not differentiate between commitment levels (Tier 1/2/3) | Hides tensions and trade-offs from stakeholders to avoid difficult conversations | Over-promises to gain approval	Uses vague language ("probably," "should work," "soon") | Delivers bad news defensively or with excessive apology | Leaves meetings without confirming what was agreed, assuming everyone understood	Writes defensively (over-explains, anticipates objections) | Cannot summarize complex issue in <200 words | Writes to impress, not communicate | Never checks if communication was understood as intended — assumes clarity after sending | Does not use headings/bullets appropriately	Buries key message (important point in paragraph 4) | Does not consider audience (technical language for policy audience) | Loses thread in long documents (structure unclear) | Outsources thinking to AI — prompts without first outlining, then accepts AI structure as their own | Writes long, unclear emails/reports (readers confused)	Uses jargon without translation (assumes shared language) | Does not revise (first draft = final draft)	Checks phone during meetings/conversations | Loses thread of complex arguments after 5-10 minutes | Multitasks during video calls (camera on but not present) | Stays silent when they've lost the thread — never asks for clarification | Keeps multiple tabs/apps open simultaneously, constantly context-switching throughout the day	Takes 15+ minutes to settle into deep work | Cannot connect current discussion back to points raised earlier in the same conversation | Cannot recall what was just said in meeting | Skims emails/reports, misses key information | Cannot read a document >2 pages without distraction	Interrupts others mid-sentence (attention jumped ahead) | Abandons difficult problems when solution not immediate | Responds to notifications within seconds (pavlovian)	Forms judgments about people quickly, rarely revises | Engages with stakeholders only when something is needed — offers nothing in return | Does not notice when they've hurt someone | Fails to acknowledge others' contributions in meetings | Gives feedback only when forced (annual reviews)	Treats stakeholders transactionally (extractive, not relational) | People leave interactions feeling drained, dismissed, or invisible | Avoids vulnerability (never admits uncertainty/mistakes) | Trust erodes over time due to inconsistency, missed commitments, and unrepaired ruptures | Withdraws when stressed vs. seeking connection	Avoids difficult conversations (sends email instead of face-to-face) | Does not follow up after conflicts (hopes it resolves itself) | Competes for airtime (talks most, listens least) | Uses AI for emotional support vs. reaching out to colleagues | Takes credit for team work implicitly	Outsources judgment to AI/authority without evaluation | Skips pre-decision failure analysis — only identifies what went wrong after the fact | Uses absolute language ("this will work", "this won't fail") regardless of actual certainty | Over-relies on first information received (anchoring) | Defends decisions even when evidence shifts	Seeks only confirming evidence (confirmation bias) | Decides without consulting stakeholders | Commits prematurely when uncertain (action bias) | Makes same mistake repeatedly (doesn't learn from outcomes) | Decides under time pressure without questioning timeline	Cannot articulate decision rationale after the fact | Avoids decisions when ambiguous (analysis paralysis) | Presents decisions with false certainty, concealing doubts and risks from others	Misreads stakeholder intent (optimistic assumptions override signals) | Uses the same communication approach regardless of how the other person is responding | Misses non-verbal cues (micro-expressions, body language) | Interrupts with "Actually..." or "What you should know is..." | Defaults to one "ear" (usually Factual) regardless of context	Asks questions already answered (wasn't actually listening) | Redirects conversation to own experience immediately | Talks over silence (cannot tolerate pause) | Paraphrases inaccurately when asked to reflect back | Checks phone/email while someone is speaking	Formulates rebuttal while other person still speaking | Defensive body language when challenged (crossed arms, turning away) | Responds immediately without pause (no processing time) | Responds only to what is explicitly stated — misses or ignores subtext and omissions	Presents change as straightforward, hiding inherent tensions and trade-offs from stakeholders | Declares victory prematurely (celebrates launch, not adoption) | Forces compliance without building buy-in | Moves too slow (endless consultation, no action) | Ignores cultural/political dynamics	Does not track leading indicators (measures activity, not behavior change) | Abandons change when initial resistance appears | Announces change without consultation | Does not model the change themselves (hypocrisy) | Either over-prescribes (no room for local adaptation) or under-specifies (no clear direction)	Dismisses resistance as obstruction | Moves too fast (doesn't let adaptation happen) | Celebrates launches and project milestones but ignores whether actual behavior has shifted	Does not set/communicate agenda in advance | Does not summarize decisions/next steps at end | Schedules back-to-back without breaks | Cannot say no to requests | Responds to all emails immediately (reactive mode)	Allows meetings to drift without redirecting | Does not protect deep work time | Lets urgent crowd out important | Fills the entire allocated meeting time regardless of whether the agenda is complete | Arrives late or unprepared	Accepts all meeting invites without evaluating necessity | Multitasks during meetings (email, other work) | Uses meetings to share information that could be sent as pre-reads, wasting collective time	Sees training as obligation, not opportunity | Learns only from success, not failure | Has no regular reflection practice — insights from experiences are lost | Defensive when receiving feedback | Attributes failure to external factors only	Repeats same mistakes without noticing pattern | Does not reflect on experiences (moves to next task immediately) | Does not seek feedback proactively | Cannot articulate what they learned from project/experience | Learns mental models in theory but never transfers them to real decisions or work	Stops reading/learning after formal education | Stays in comfort zone (avoids unfamiliar domains) | Keeps learning private — never teaches or shares insights with peers or team	Treats body as vehicle to carry head around | Cannot sit still without fidgeting/checking phone | Walks into high-stakes meetings or sessions without any physical or mental preparation | Never checks in with body ("How am I feeling physically?") | Cannot self-regulate once activated — stays in fight/flight/freeze for extended periods	Unaware of posture (slouching, hunched) | Cannot identify where tension lives in body | Shallow breathing (chest-only, not diaphragmatic) | Unaware of physical stress signals until they manifest as full breakdown or illness | Sits for 8+ hours without movement	Ignores hunger/thirst/fatigue signals | Drinks coffee/tea first thing (before water) | Eats at desk while working (unconscious consumption)	Cannot sit without screen (meals, commutes, waiting) | Relies on AI to perform tasks they used to do themselves, allowing core capacities to atrophy | Uses AI for emotional support/companionship | Phone always within reach (never out of sight) | Checks notifications within seconds	Works late into night on screens (sleep disruption) | Never questions algorithm recommendations | Does not audit screen time (unconscious consumption) | Always defaults to the most convenient tool — avoids the productive friction that builds skill | Scrolls short-form video for 10+ minutes daily	Outsources all thinking to AI (doesn't attempt first) | Digital communication preferred over face-to-face | Passively follows algorithm-recommended content without conscious choice or curation	Has no daily regulation practice — starts the day reactively without grounding | Ignores body signals (pushes through exhaustion) | Skips meals/sleep when busy (self-neglect) | Avoids difficult situations (procrastination) | Takes stress home (cannot compartmentalize)	Loses perspective under pressure (tunnel vision) | Reacts immediately and impulsively in high-pressure moments without pausing | Reacts emotionally under pressure (anger, withdrawal, freeze) | Does not take breaks (works through fatigue) | Cannot distinguish between genuine response and defensive reaction in the moment	Cannot identify stress in body until breakdown | Relies on stimulants (caffeine, sugar) to sustain energy | Catastrophizes setbacks ("This is a disaster")	Does not consider stakeholder dignity in decisions | Rationalizes ethically questionable choices (ends justify means) | Applies rigid universal rules without considering context-specific ethical demands | Continues programs or actions past the point where they cause harm due to sunk cost or inertia | Treats means as separate from ends (utilitarian only)	Does not voice concerns when observing problems | Cannot articulate their own values clearly | Prioritizes optics over substance ("looks good" vs. "is good") | Avoids ethical complexity (prefers clear-cut cases) | Makes expedient choices that contradict stated values	Defaults to "what's efficient?" vs. "what's right?" | Goes along with group even when uncomfortable | Stays engaged even when involvement compromises ethical integrity, rationalizing continued participation	Uses academic language with farmers | Stays within familiar sectors and communities — does not invest in trust-building across difference | Expects others to adapt to their norms | Does not learn stakeholder language/priorities | Judges other sectors (government = inefficient, NGOs = naive)	Does not adapt communication style to context | Imposes expert solutions without local consultation | Misses cultural cues (offense given unknowingly) | Treats all stakeholders identically (one-size-fits-all) | Assumes Western norms universal (timing, directness, hierarchy)	Uses activist framing with government officials | Uses expert status or positional power to dominate rather than equalize conversations	Never checks bank account balance until necessary/overdrawn | Keeps all money in a single savings account (no diversification) | Never reviews recurring subscriptions or unnecessary fees | Does not calculate Net Worth or track financial progress | Pays bills late, resulting in fees/stress	Spends without pre-meditation (impulse purchases) | Assumes financial knowledge is sufficient (stops learning) | Ignores where money went last month (no tracking/audit) | Borrows money from others casually without tracking | Avoids difficult financial conversations with partners/self	Saving is treated as an afterthought or what's left over | Uses credit card points/cashback sub-optimally or not at all | Checks market/investment apps impulsively throughout the day	Vocabulary is imprecise or limited, leading to generic descriptions | Uses overly complex, convoluted sentence structures that obscure meaning | Body language/facial expressions conflict with the verbal message | Cannot fluidly switch between formal and informal language registers | Difficulty articulating certain sounds clearly, making speech imprecise	Speech is abnormally rapid or irregular, leading to poor intelligibility (Cluttering) | Monotone or flat intonation (Monopitch/Monoloudness) | Relies on too much technical jargon with non-technical audiences | Avoids words or situations to hide difficulty speaking (Covert Stuttering/Avoidance) | Low volume or asthenic (weak) voice quality (Soft voice)	Uses fillers ("um," "uh," "like") excessively to bridge pauses | Repeats or prolongs sounds/syllables, blocking the flow of speech (Overt Stuttering) | Answers questions with simple, one-word responses (low content density)`;

async function parseAndGenerate() {
    console.log("🛠 Parsing Input...");
    
    // Split by tabs
    const parts = RAW_INPUT.split('\t');
    
    const userDetails = {
        firstName: parts[1],
        lastName: parts[2],
        email: parts[3],
        phone: parts[4]
    };

    const veryHighCats = parts[5].split(' | ').filter(c => c);
    
    // Mock the payload structure our Supabase function expects
    const payload = {
        user: userDetails,
        topCategories: veryHighCats
    };

    console.log(`🤖 Requesting AI Report for ${userDetails.firstName}...`);
    
    // We get the endpoint from the user's .env manually for this run
    const SUPABASE_FUNC_URL = "https://hpfrmkhykcbmihpwnwcd.supabase.co/functions/v1/generate-nlp-report";

    try {
        const res = await fetch(SUPABASE_FUNC_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        const aiReport = await res.json();
        console.log("✅ AI Report Received.");

        console.log("📄 Generating Premium PDF...");
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const margin = 20;

        const COLORS = {
            primary: [30, 41, 59],   secondary: [79, 70, 229],
            accent: [139, 92, 246],  text: [17, 24, 39],
            muted: [107, 114, 128],  light: [249, 250, 251]
        };

        const addPageHeader = (title) => {
            doc.setFillColor(...COLORS.primary);
            doc.rect(0, 0, pageWidth, 30, 'F');
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(14);
            doc.text(title.toUpperCase(), 20, 20);
            doc.text(`Page ${doc.internal.getNumberOfPages()}`, pageWidth - 30, 20);
        };

        // PAGE 1: COVER
        doc.setFillColor(...COLORS.primary);
        doc.rect(0, 0, 15, pageHeight, 'F');
        doc.setFontSize(48); doc.setTextColor(...COLORS.primary);
        doc.text("MGSCC", 30, 60);
        doc.setFontSize(28); doc.setTextColor(...COLORS.secondary);
        doc.text("Behavioral Assessment Feedback", 30, 80);
        doc.setFontSize(14); doc.setTextColor(...COLORS.text);
        doc.text("PREPARED FOR:", 30, 150);
        doc.text(`${userDetails.firstName} ${userDetails.lastName}`.toUpperCase(), 30, 160);

        // PAGE 2: SUMMARY
        doc.addPage();
        addPageHeader("Executive Summary");
        doc.setTextColor(...COLORS.text);
        doc.setFontSize(11);
        const summaryLines = doc.splitTextToSize(aiReport.executiveSummary, pageWidth - (margin * 2));
        doc.text(summaryLines, margin, 65);

        // PAGE 3: COMPETENCIES
        doc.addPage();
        addPageHeader("Competency Impact Map");
        let chartY = 80;
        Object.entries(aiReport.competencies).forEach(([name, score]) => {
            doc.setTextColor(...COLORS.text);
            doc.text(name, margin, chartY + 5);
            doc.setFillColor(229, 231, 235);
            doc.rect(80, chartY, 100, 8, 'F');
            doc.setFillColor(...COLORS.secondary);
            doc.rect(80, chartY, score * 20, 8, 'F');
            chartY += 15;
        });

        const outputPath = path.join(__dirname, `../reports/Executive_Report_${userDetails.firstName}.pdf`);
        
        // Ensure reports dir exists
        if (!fs.existsSync(path.join(__dirname, '../reports'))) {
            fs.mkdirSync(path.join(__dirname, '../reports'));
        }

        doc.save(outputPath);
        console.log(`✨ DONE! PDF saved to: ${outputPath}`);

    } catch (e) {
        console.error("❌ Failed:", e);
    }
}

parseAndGenerate();
