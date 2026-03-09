import os
from dotenv import load_dotenv
from crewai import Crew, Process

from agents import IOTGatewayAgents
from tasks import IOTGatewayTasks

# Load environment variables
load_dotenv()

def main():
    print("Welcome to the IoT Gateway Management System - Multi-Agent Setup")
    print("---------------------------------------------------------------")
    
    feature_request = input("Enter the feature you want the team to build: ")
    if not feature_request.strip():
        feature_request = "Add user action audit logging functionality across all gateway devices."

    agents = IOTGatewayAgents()
    tasks = IOTGatewayTasks()

    # Instantiate Agents
    manager = agents.manager_agent()
    backend_dev = agents.backend_agent()
    frontend_dev = agents.frontend_agent()
    qa_eng = agents.qa_agent()

    # Instantiate Tasks
    plan_task = tasks.architecture_planning_task(manager, feature_request)
    
    # In CrewAI, tasks executed in sequential order automatically pass their output as context
    backend_task = tasks.backend_development_task(backend_dev, "Please refer to the manager's architecture plan.")
    backend_task.context = [plan_task]

    frontend_task = tasks.frontend_development_task(frontend_dev, "Please refer to the manager's architecture plan.")
    frontend_task.context = [plan_task]

    test_task = tasks.testing_task(qa_eng, feature_request)

    # Form the Crew
    crew = Crew(
        agents=[manager, backend_dev, frontend_dev, qa_eng],
        tasks=[plan_task, backend_task, frontend_task, test_task],
        process=Process.sequential,  # To use Manager Agent explicitly, you can set Process.hierarchical and specify manager_llm
        verbose=True
    )

    print("\nStarting the Multi-Agent execution...")
    result = crew.kickoff()

    print("\n==================================")
    print("FINAL RESULT FROM THE CREW:")
    print("==================================")
    print(result)

if __name__ == "__main__":
    main()
