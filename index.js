[package]
authors = ["Solana Maintainers <maintainers@solana.foundation>"]
edition = "2021"
name = "solana-genesis"
description = "Blockchain, Rebuilt for Scale"
version = "1.11.0"
repository = "https://github.com/solana-labs/solana"
license = "Apache-2.0"
homepage = "https://solana.com/"
documentation = "https://docs.rs/solana-genesis"

[dependencies]
base64 = "0.13.0"
clap = "2.33.1"
serde = "1.0.136"
serde_json = "1.0.79"
serde_yaml = "0.8.23"
solana-clap-utils = { path = "../clap-utils", version = "=1.11.0" }
solana-cli-config = { path = "../cli-config", version = "=1.11.0" }
solana-entry = { path = "../entry", version = "=1.11.0" }
solana-ledger = { path = "../ledger", version = "=1.11.0" }
solana-logger = { path = "../logger", version = "=1.11.0" }
solana-runtime = { path = "../runtime", version = "=1.11.0" }
solana-sdk = { path = "../sdk", version = "=1.11.0" }
solana-stake-program = { path = "../programs/stake", version = "=1.11.0" }
solana-version = { path = "../version", version = "=1.11.0" }
solana-vote-program = { path = "../programs/vote", version = "=1.11.0" }
tempfile = "3.3.0"

[[bin]]
name = "solana-genesis"
path = "src/main.rs"

[lib]
name = "solana_genesis"

[package.metadata.docs.rs]
targets = ["x86_64-unknown-linux-gnu"]
