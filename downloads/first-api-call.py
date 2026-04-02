# First Anthropic API Call
#
# A minimal script that sends one message to Claude via the Anthropic API
# and prints the response.
#
# Before running:
#   1. Install the SDK: pip install anthropic
#   2. Replace YOUR_API_KEY below with your actual API key
#   3. Never commit this file with your key in it
#
# To use an environment variable instead (recommended):
#   export ANTHROPIC_API_KEY="your-key-here"
#   Then remove the api_key parameter below. The SDK reads
#   ANTHROPIC_API_KEY from the environment automatically.

import anthropic

# Create the client. Remove api_key if using environment variable.
client = anthropic.Anthropic(api_key="YOUR_API_KEY")

# Send a message with a system prompt and one user message.
message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    system="You are a helpful assistant. Be concise.",
    messages=[
        {"role": "user", "content": "What are three things every new Python developer should learn first?"}
    ]
)

# Print the response text.
print(message.content[0].text)
