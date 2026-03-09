# IoT Gateway Management System - Multi-Agent AI Setup

This directory contains a boilerplate setup using **CrewAI** to orchestrate multiple AI agents working together on the `IoT Gateway Management System` codebase.

## Prerequisites
1. Python 3.10+
2. An OpenAI API Key (or an Anthropic/Local LLM setup)

## Setup Instructions

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Configure Environment:**
   Create a `.env` file in this directory and add your key:
   ```env
   OPENAI_API_KEY=sk-your-api-key-here
   ```

3. **Run the Multi-Agent Crew:**
   ```bash
   python main.py
   ```

## Agent Roles Defined (`agents.py`)
- **Manager Agent (System Architect):** Ensures Clean Architecture is followed and breaks down requirements into technical plans.
- **Backend Agent (Python/FastAPI):** Focuses on REST APIs, Modbus/Zigbee connections, and database interactions.
- **Frontend Agent (React/Typescript):** Focuses on React components, Zustand stores, and Tailwind styling.
- **QA Agent:** Writes test cases (Pytest, Jest, Playwright) based on the implementation plan.

## Next Steps - Give Agents Tools
To make these agents interact with your actual project code directly, you can pass custom `Tools` into them.
CrewAI provides tools like `FileReadTool`, `DirectoryReadTool`.

Example of giving Backend Agent file reading tools:
```python
from crewai_tools import FileReadTool, DirectoryReadTool

docs_tool = DirectoryReadTool(directory='../backend/app')
file_tool = FileReadTool()

# in agents.py
def backend_agent(self):
    return Agent(
        role='Backend Python Developer',
        tools=[docs_tool, file_tool],
        # ...
    )
```
