export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-7xl sm:px-6 lg:px-8 sm:py-6 lg:py-8 prose">
        <h1>Agent Meta-Programming System Runtime</h1>
        <p>
          AMPS is a research project to develop a language and runtime for meta-self-improving AI
          agents. Unlike existing AI agents, AMPS agents will live in a{" "}
          <a href="https://en.wikipedia.org/wiki/Reflective_programming">
            reflective programming environment
          </a>{" "}
          which allows them to understand and modify their own planned behavior to most effectively
          help themselves reach their goals.
        </p>

        <h3>Agenda</h3>
        <ol>
          <li>
            Initial research - review existing literature on AI agents, planning, and executive
            functioning.
          </li>
          <li>
            Problem identification - collect problems that will serve as a realistic test of the
            efficacy of autonomous AI agents.
          </li>
          <li>
            Human trial recording - record a human (mysel) solving the problems identified in step 2
            out loud, on video and in screen recording.
          </li>
          <li>
            Pseudocode development - Write pseudocode programs based on human trial data to
            symbolically describe the human perceptions, thoughts, and actions.
          </li>
          <li>
            Language spec development - Inspired by the human pseudocode, write a simple language
            spec for the AMPS language.
          </li>
          <li>
            Initial Python library development - develop a Python library that implements the AMPS
            language.
          </li>
          <li>
            Iterative system improvement - execute test runs against the problem list and record
            success metrics. Use the results to iteratively improve the system and reach a v1
            language spec.
          </li>
          <li>
            Fine-tuning data collection - collect a dataset of AMPS contexts and correct outputs.
          </li>
          <li>
            LLM fine-tuning - fine-tune an open-source language model on the dataset in order to
            better generate AMPS commands.
          </li>
          <li>
            Full implementation and evaluation - implement the full AMPS runtime and evaluate it on
            the problem list.
          </li>
          <li>Documentation - write up the results and publish online.</li>
        </ol>
      </main>
    </>
  );
}
