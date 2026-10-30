// Content for the Dirty Dozen tool: the 12 factors and one quiz
// scenario per factor. Edit the text here; the logic is in quiz.js.

var DIRTY_DOZEN = [
  {
    id: "communication",
    name: "Lack of Communication",
    meaning: "Information is not passed on, or is passed on unclearly, between people or shifts.",
    safetyNets: [
      "Write down what you did and what is still open, on the task card or in the logbook.",
      "Confirm spoken instructions by repeating them back."
    ],
    scenario: "At shift change, a technician has opened an engine cowling and removed several fasteners for an inspection. They tell the incoming technician \"it's nearly done\" and leave. Nothing is written on the task card about the missing fasteners.",
    explanation: "Key information about the open work was only said in passing and never written down, so the next shift cannot know what is still missing."
  },
  {
    id: "complacency",
    name: "Complacency",
    meaning: "Over-confidence from doing a task many times, so you stop looking carefully.",
    safetyNets: [
      "Expect to find a fault every time you inspect.",
      "Never sign for work you did not check yourself."
    ],
    scenario: "An inspector has checked the landing gear on this aircraft type hundreds of times and has never found a problem. Today they glance over it quickly and sign it off, missing a small crack on a bracket.",
    explanation: "Because the task felt routine and nothing had ever been wrong before, the inspector stopped looking closely."
  },
  {
    id: "knowledge",
    name: "Lack of Knowledge",
    meaning: "Not having the training, information or experience needed for the task.",
    safetyNets: [
      "Get proper training on the aircraft type before working on it.",
      "Use the current manual, and ask someone who knows when unsure."
    ],
    scenario: "A newly hired technician, trained on a different aircraft model, installs a fuel pump using the steps and torque values they remember from the old model. The procedure for this model is different.",
    explanation: "The technician had not been trained on this aircraft model and did not know its procedure differs."
  },
  {
    id: "distraction",
    name: "Distraction",
    meaning: "Your attention is pulled away from the task, so you lose your place.",
    safetyNets: [
      "When interrupted, mark where you stopped.",
      "When you come back, restart a few steps before where you left off."
    ],
    scenario: "A technician is torquing the nuts on a wheel when a colleague calls them over to help with something else. When they return, they carry on with the next nut, assuming the one before it was already done. It was not.",
    explanation: "The interruption broke the technician's concentration, and they lost track of where they were in the task."
  },
  {
    id: "teamwork",
    name: "Lack of Teamwork",
    meaning: "People working on the same job do not coordinate or share responsibility.",
    safetyNets: [
      "Agree before starting who does which part of the job.",
      "Make sure everyone understands the plan and checks each other's work."
    ],
    scenario: "Two technicians reconnect a flight control cable together. Each assumes the other will do the final check of the locking wire. Neither does, and the aircraft is signed off with the check missing.",
    explanation: "The two technicians never agreed who was responsible for the final check, so it fell between them."
  },
  {
    id: "fatigue",
    name: "Fatigue",
    meaning: "Physical or mental tiredness that slows thinking and causes mistakes.",
    safetyNets: [
      "Watch for signs of tiredness in yourself and others.",
      "Avoid complex tasks in the early-morning hours when alertness is lowest; get enough sleep."
    ],
    scenario: "At 4 a.m., near the end of a double shift, a technician reads the same line of the wiring manual three times and still connects two wires the wrong way round.",
    explanation: "A long shift and the early-morning hour left the technician too tired to concentrate."
  },
  {
    id: "resources",
    name: "Lack of Resources",
    meaning: "Not having the right tools, parts, equipment, people or information.",
    safetyNets: [
      "Check that all tools and parts are available before you start.",
      "Never use an unapproved part or the wrong tool to get the job done."
    ],
    scenario: "The correct crimping tool for an electrical connector is missing from the tool store. To keep the job moving, the technician uses a crimping tool meant for a different connector size.",
    explanation: "The right tool was not available, which led the technician to make do with the wrong one."
  },
  {
    id: "pressure",
    name: "Pressure",
    meaning: "A real or felt push to finish quickly, which can lead to cutting corners.",
    safetyNets: [
      "Ask yourself whether the rush is making you skip steps.",
      "Say so clearly if you need more time to do the job properly."
    ],
    scenario: "Passengers are already boarding and the departure is in 20 minutes. A manager keeps asking \"Is it done yet?\". After changing the engine oil filter, the technician skips the engine run to check for leaks.",
    explanation: "The urgency to get the aircraft out on time pushed the technician to skip a required check."
  },
  {
    id: "assertiveness",
    name: "Lack of Assertiveness",
    meaning: "Not speaking up about a concern, even when you know something is wrong.",
    safetyNets: [
      "Speak up when something does not look right, whoever is involved.",
      "Do not lower your standards to avoid an awkward conversation."
    ],
    scenario: "An apprentice notices that a senior technician has not fitted a locking wire on a bolt. The apprentice says nothing, because the senior technician has many years of experience.",
    explanation: "The apprentice saw the problem but did not raise it with a more senior colleague."
  },
  {
    id: "stress",
    name: "Stress",
    meaning: "Tension from work or personal life that takes your mind off the job.",
    safetyNets: [
      "Notice when stress is affecting your work.",
      "Step back, take a short break, or talk to someone."
    ],
    scenario: "A technician is going through a difficult family situation and is worried about money. During a fuel system task, they keep losing track of which steps they have already completed.",
    explanation: "Personal worries were taking up the technician's attention during the task."
  },
  {
    id: "awareness",
    name: "Lack of Awareness",
    meaning: "Not noticing the wider situation or thinking through the effects of your work.",
    safetyNets: [
      "Think about what else your work could affect.",
      "Check whether recent changes to the aircraft affect your task."
    ],
    scenario: "A technician replaces a hydraulic line and routes it exactly as before. They do not notice that a recent modification added an electrical wiring bundle nearby, and the new line now rubs against it.",
    explanation: "The technician did not look at the wider picture or consider how their work interacts with recent changes."
  },
  {
    id: "norms",
    name: "Norms",
    meaning: "Unwritten \"this is how we do it here\" habits that differ from the approved procedure.",
    safetyNets: [
      "Always work to the approved manual.",
      "Question habits that are not in the procedure, even if everyone follows them."
    ],
    scenario: "In this hangar, everyone tightens small fasteners \"by feel\" instead of using a torque wrench, as the manual requires. New staff quickly pick up the habit, because \"that's how it's always been done here\".",
    explanation: "A shared workplace habit has replaced the approved procedure and is passed on to new staff."
  }
];
