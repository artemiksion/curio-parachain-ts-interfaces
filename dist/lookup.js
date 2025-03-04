// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */
/* eslint-disable sort-keys */
export default {
    /**
     * Lookup3: frame_system::AccountInfo<Index, pallet_balances::AccountData<Balance>>
     **/
    FrameSystemAccountInfo: {
        nonce: 'u32',
        consumers: 'u32',
        providers: 'u32',
        sufficients: 'u32',
        data: 'PalletBalancesAccountData'
    },
    /**
     * Lookup5: pallet_balances::AccountData<Balance>
     **/
    PalletBalancesAccountData: {
        free: 'u128',
        reserved: 'u128',
        miscFrozen: 'u128',
        feeFrozen: 'u128'
    },
    /**
     * Lookup7: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
     **/
    FrameSupportDispatchPerDispatchClassWeight: {
        normal: 'SpWeightsWeightV2Weight',
        operational: 'SpWeightsWeightV2Weight',
        mandatory: 'SpWeightsWeightV2Weight'
    },
    /**
     * Lookup8: sp_weights::weight_v2::Weight
     **/
    SpWeightsWeightV2Weight: {
        refTime: 'Compact<u64>',
        proofSize: 'Compact<u64>'
    },
    /**
     * Lookup13: sp_runtime::generic::digest::Digest
     **/
    SpRuntimeDigest: {
        logs: 'Vec<SpRuntimeDigestDigestItem>'
    },
    /**
     * Lookup15: sp_runtime::generic::digest::DigestItem
     **/
    SpRuntimeDigestDigestItem: {
        _enum: {
            Other: 'Bytes',
            __Unused1: 'Null',
            __Unused2: 'Null',
            __Unused3: 'Null',
            Consensus: '([u8;4],Bytes)',
            Seal: '([u8;4],Bytes)',
            PreRuntime: '([u8;4],Bytes)',
            __Unused7: 'Null',
            RuntimeEnvironmentUpdated: 'Null'
        }
    },
    /**
     * Lookup18: frame_system::EventRecord<curio_mainnet_runtime::RuntimeEvent, primitive_types::H256>
     **/
    FrameSystemEventRecord: {
        phase: 'FrameSystemPhase',
        event: 'Event',
        topics: 'Vec<H256>'
    },
    /**
     * Lookup20: frame_system::pallet::Event<T>
     **/
    FrameSystemEvent: {
        _enum: {
            ExtrinsicSuccess: {
                dispatchInfo: 'FrameSupportDispatchDispatchInfo',
            },
            ExtrinsicFailed: {
                dispatchError: 'SpRuntimeDispatchError',
                dispatchInfo: 'FrameSupportDispatchDispatchInfo',
            },
            CodeUpdated: 'Null',
            NewAccount: {
                account: 'AccountId32',
            },
            KilledAccount: {
                account: 'AccountId32',
            },
            Remarked: {
                _alias: {
                    hash_: 'hash',
                },
                sender: 'AccountId32',
                hash_: 'H256'
            }
        }
    },
    /**
     * Lookup21: frame_support::dispatch::DispatchInfo
     **/
    FrameSupportDispatchDispatchInfo: {
        weight: 'SpWeightsWeightV2Weight',
        class: 'FrameSupportDispatchDispatchClass',
        paysFee: 'FrameSupportDispatchPays'
    },
    /**
     * Lookup22: frame_support::dispatch::DispatchClass
     **/
    FrameSupportDispatchDispatchClass: {
        _enum: ['Normal', 'Operational', 'Mandatory']
    },
    /**
     * Lookup23: frame_support::dispatch::Pays
     **/
    FrameSupportDispatchPays: {
        _enum: ['Yes', 'No']
    },
    /**
     * Lookup24: sp_runtime::DispatchError
     **/
    SpRuntimeDispatchError: {
        _enum: {
            Other: 'Null',
            CannotLookup: 'Null',
            BadOrigin: 'Null',
            Module: 'SpRuntimeModuleError',
            ConsumerRemaining: 'Null',
            NoProviders: 'Null',
            TooManyConsumers: 'Null',
            Token: 'SpRuntimeTokenError',
            Arithmetic: 'SpArithmeticArithmeticError',
            Transactional: 'SpRuntimeTransactionalError',
            Exhausted: 'Null',
            Corruption: 'Null',
            Unavailable: 'Null'
        }
    },
    /**
     * Lookup25: sp_runtime::ModuleError
     **/
    SpRuntimeModuleError: {
        index: 'u8',
        error: '[u8;4]'
    },
    /**
     * Lookup26: sp_runtime::TokenError
     **/
    SpRuntimeTokenError: {
        _enum: ['NoFunds', 'WouldDie', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported']
    },
    /**
     * Lookup27: sp_arithmetic::ArithmeticError
     **/
    SpArithmeticArithmeticError: {
        _enum: ['Underflow', 'Overflow', 'DivisionByZero']
    },
    /**
     * Lookup28: sp_runtime::TransactionalError
     **/
    SpRuntimeTransactionalError: {
        _enum: ['LimitReached', 'NoLayer']
    },
    /**
     * Lookup29: pallet_indices::pallet::Event<T>
     **/
    PalletIndicesEvent: {
        _enum: {
            IndexAssigned: {
                who: 'AccountId32',
                index: 'u32',
            },
            IndexFreed: {
                index: 'u32',
            },
            IndexFrozen: {
                index: 'u32',
                who: 'AccountId32'
            }
        }
    },
    /**
     * Lookup30: cumulus_pallet_parachain_system::pallet::Event<T>
     **/
    CumulusPalletParachainSystemEvent: {
        _enum: {
            ValidationFunctionStored: 'Null',
            ValidationFunctionApplied: {
                relayChainBlockNum: 'u32',
            },
            ValidationFunctionDiscarded: 'Null',
            UpgradeAuthorized: {
                codeHash: 'H256',
            },
            DownwardMessagesReceived: {
                count: 'u32',
            },
            DownwardMessagesProcessed: {
                weightUsed: 'SpWeightsWeightV2Weight',
                dmqHead: 'H256',
            },
            UpwardMessageSent: {
                messageHash: 'Option<[u8;32]>'
            }
        }
    },
    /**
     * Lookup32: pallet_balances::pallet::Event<T, I>
     **/
    PalletBalancesEvent: {
        _enum: {
            Endowed: {
                account: 'AccountId32',
                freeBalance: 'u128',
            },
            DustLost: {
                account: 'AccountId32',
                amount: 'u128',
            },
            Transfer: {
                from: 'AccountId32',
                to: 'AccountId32',
                amount: 'u128',
            },
            BalanceSet: {
                who: 'AccountId32',
                free: 'u128',
                reserved: 'u128',
            },
            Reserved: {
                who: 'AccountId32',
                amount: 'u128',
            },
            Unreserved: {
                who: 'AccountId32',
                amount: 'u128',
            },
            ReserveRepatriated: {
                from: 'AccountId32',
                to: 'AccountId32',
                amount: 'u128',
                destinationStatus: 'FrameSupportTokensMiscBalanceStatus',
            },
            Deposit: {
                who: 'AccountId32',
                amount: 'u128',
            },
            Withdraw: {
                who: 'AccountId32',
                amount: 'u128',
            },
            Slashed: {
                who: 'AccountId32',
                amount: 'u128'
            }
        }
    },
    /**
     * Lookup33: frame_support::traits::tokens::misc::BalanceStatus
     **/
    FrameSupportTokensMiscBalanceStatus: {
        _enum: ['Free', 'Reserved']
    },
    /**
     * Lookup34: pallet_transaction_payment::pallet::Event<T>
     **/
    PalletTransactionPaymentEvent: {
        _enum: {
            TransactionFeePaid: {
                who: 'AccountId32',
                actualFee: 'u128',
                tip: 'u128'
            }
        }
    },
    /**
     * Lookup35: pallet_session::pallet::Event
     **/
    PalletSessionEvent: {
        _enum: {
            NewSession: {
                sessionIndex: 'u32'
            }
        }
    },
    /**
     * Lookup36: parachain_staking::pallet::Event<T>
     **/
    ParachainStakingEvent: {
        _enum: {
            NewRound: '(u64,u32)',
            EnteredTopCandidates: 'AccountId32',
            LeftTopCandidates: 'AccountId32',
            JoinedCollatorCandidates: '(AccountId32,u128)',
            CollatorStakedMore: '(AccountId32,u128,u128)',
            CollatorStakedLess: '(AccountId32,u128,u128)',
            CollatorScheduledExit: '(u32,AccountId32,u32)',
            CollatorCanceledExit: 'AccountId32',
            CandidateLeft: '(AccountId32,u128)',
            CollatorRemoved: '(AccountId32,u128)',
            MaxCandidateStakeChanged: 'u128',
            DelegatorStakedMore: '(AccountId32,AccountId32,u128,u128)',
            DelegatorStakedLess: '(AccountId32,AccountId32,u128,u128)',
            DelegatorLeft: '(AccountId32,u128)',
            Delegation: '(AccountId32,u128,AccountId32,u128)',
            DelegationReplaced: '(AccountId32,u128,AccountId32,u128,AccountId32,u128)',
            DelegatorLeftCollator: '(AccountId32,AccountId32,u128,u128)',
            Rewarded: '(AccountId32,u128)',
            RoundInflationSet: '(Perquintill,Perquintill,Perquintill,Perquintill)',
            MaxSelectedCandidatesSet: '(u32,u32)',
            BlocksPerRoundSet: '(u32,u64,u64,u64)'
        }
    },
    /**
     * Lookup38: pallet_democracy::pallet::Event<T>
     **/
    PalletDemocracyEvent: {
        _enum: {
            Proposed: {
                proposalIndex: 'u32',
                deposit: 'u128',
            },
            Tabled: {
                proposalIndex: 'u32',
                deposit: 'u128',
            },
            ExternalTabled: 'Null',
            Started: {
                refIndex: 'u32',
                threshold: 'PalletDemocracyVoteThreshold',
            },
            Passed: {
                refIndex: 'u32',
            },
            NotPassed: {
                refIndex: 'u32',
            },
            Cancelled: {
                refIndex: 'u32',
            },
            Delegated: {
                who: 'AccountId32',
                target: 'AccountId32',
            },
            Undelegated: {
                account: 'AccountId32',
            },
            Vetoed: {
                who: 'AccountId32',
                proposalHash: 'H256',
                until: 'u64',
            },
            Blacklisted: {
                proposalHash: 'H256',
            },
            Voted: {
                voter: 'AccountId32',
                refIndex: 'u32',
                vote: 'PalletDemocracyVoteAccountVote',
            },
            Seconded: {
                seconder: 'AccountId32',
                propIndex: 'u32',
            },
            ProposalCanceled: {
                propIndex: 'u32',
            },
            MetadataSet: {
                _alias: {
                    hash_: 'hash',
                },
                owner: 'PalletDemocracyMetadataOwner',
                hash_: 'H256',
            },
            MetadataCleared: {
                _alias: {
                    hash_: 'hash',
                },
                owner: 'PalletDemocracyMetadataOwner',
                hash_: 'H256',
            },
            MetadataTransferred: {
                _alias: {
                    hash_: 'hash',
                },
                prevOwner: 'PalletDemocracyMetadataOwner',
                owner: 'PalletDemocracyMetadataOwner',
                hash_: 'H256'
            }
        }
    },
    /**
     * Lookup39: pallet_democracy::vote_threshold::VoteThreshold
     **/
    PalletDemocracyVoteThreshold: {
        _enum: ['SuperMajorityApprove', 'SuperMajorityAgainst', 'SimpleMajority']
    },
    /**
     * Lookup40: pallet_democracy::vote::AccountVote<Balance>
     **/
    PalletDemocracyVoteAccountVote: {
        _enum: {
            Standard: {
                vote: 'Vote',
                balance: 'u128',
            },
            Split: {
                aye: 'u128',
                nay: 'u128'
            }
        }
    },
    /**
     * Lookup42: pallet_democracy::types::MetadataOwner
     **/
    PalletDemocracyMetadataOwner: {
        _enum: {
            External: 'Null',
            Proposal: 'u32',
            Referendum: 'u32'
        }
    },
    /**
     * Lookup43: pallet_collective::pallet::Event<T, I>
     **/
    PalletCollectiveEvent: {
        _enum: {
            Proposed: {
                account: 'AccountId32',
                proposalIndex: 'u32',
                proposalHash: 'H256',
                threshold: 'u32',
            },
            Voted: {
                account: 'AccountId32',
                proposalHash: 'H256',
                voted: 'bool',
                yes: 'u32',
                no: 'u32',
            },
            Approved: {
                proposalHash: 'H256',
            },
            Disapproved: {
                proposalHash: 'H256',
            },
            Executed: {
                proposalHash: 'H256',
                result: 'Result<Null, SpRuntimeDispatchError>',
            },
            MemberExecuted: {
                proposalHash: 'H256',
                result: 'Result<Null, SpRuntimeDispatchError>',
            },
            Closed: {
                proposalHash: 'H256',
                yes: 'u32',
                no: 'u32'
            }
        }
    },
    /**
     * Lookup48: pallet_elections_phragmen::pallet::Event<T>
     **/
    PalletElectionsPhragmenEvent: {
        _enum: {
            NewTerm: {
                newMembers: 'Vec<(AccountId32,u128)>',
            },
            EmptyTerm: 'Null',
            ElectionError: 'Null',
            MemberKicked: {
                member: 'AccountId32',
            },
            Renounced: {
                candidate: 'AccountId32',
            },
            CandidateSlashed: {
                candidate: 'AccountId32',
                amount: 'u128',
            },
            SeatHolderSlashed: {
                seatHolder: 'AccountId32',
                amount: 'u128'
            }
        }
    },
    /**
     * Lookup51: pallet_membership::pallet::Event<T, I>
     **/
    PalletMembershipEvent: {
        _enum: ['MemberAdded', 'MemberRemoved', 'MembersSwapped', 'MembersReset', 'KeyChanged', 'Dummy']
    },
    /**
     * Lookup52: cumulus_pallet_xcmp_queue::pallet::Event<T>
     **/
    CumulusPalletXcmpQueueEvent: {
        _enum: {
            Success: {
                messageHash: 'Option<[u8;32]>',
                weight: 'SpWeightsWeightV2Weight',
            },
            Fail: {
                messageHash: 'Option<[u8;32]>',
                error: 'XcmV3TraitsError',
                weight: 'SpWeightsWeightV2Weight',
            },
            BadVersion: {
                messageHash: 'Option<[u8;32]>',
            },
            BadFormat: {
                messageHash: 'Option<[u8;32]>',
            },
            XcmpMessageSent: {
                messageHash: 'Option<[u8;32]>',
            },
            OverweightEnqueued: {
                sender: 'u32',
                sentAt: 'u32',
                index: 'u64',
                required: 'SpWeightsWeightV2Weight',
            },
            OverweightServiced: {
                index: 'u64',
                used: 'SpWeightsWeightV2Weight'
            }
        }
    },
    /**
     * Lookup53: xcm::v3::traits::Error
     **/
    XcmV3TraitsError: {
        _enum: {
            Overflow: 'Null',
            Unimplemented: 'Null',
            UntrustedReserveLocation: 'Null',
            UntrustedTeleportLocation: 'Null',
            LocationFull: 'Null',
            LocationNotInvertible: 'Null',
            BadOrigin: 'Null',
            InvalidLocation: 'Null',
            AssetNotFound: 'Null',
            FailedToTransactAsset: 'Null',
            NotWithdrawable: 'Null',
            LocationCannotHold: 'Null',
            ExceedsMaxMessageSize: 'Null',
            DestinationUnsupported: 'Null',
            Transport: 'Null',
            Unroutable: 'Null',
            UnknownClaim: 'Null',
            FailedToDecode: 'Null',
            MaxWeightInvalid: 'Null',
            NotHoldingFees: 'Null',
            TooExpensive: 'Null',
            Trap: 'u64',
            ExpectationFalse: 'Null',
            PalletNotFound: 'Null',
            NameMismatch: 'Null',
            VersionIncompatible: 'Null',
            HoldingWouldOverflow: 'Null',
            ExportError: 'Null',
            ReanchorFailed: 'Null',
            NoDeal: 'Null',
            FeesNotMet: 'Null',
            LockError: 'Null',
            NoPermission: 'Null',
            Unanchored: 'Null',
            NotDepositable: 'Null',
            UnhandledXcmVersion: 'Null',
            WeightLimitReached: 'SpWeightsWeightV2Weight',
            Barrier: 'Null',
            WeightNotComputable: 'Null',
            ExceedsStackLimit: 'Null'
        }
    },
    /**
     * Lookup55: pallet_xcm::pallet::Event<T>
     **/
    PalletXcmEvent: {
        _enum: {
            Attempted: 'XcmV3TraitsOutcome',
            Sent: '(XcmV3MultiLocation,XcmV3MultiLocation,XcmV3Xcm)',
            UnexpectedResponse: '(XcmV3MultiLocation,u64)',
            ResponseReady: '(u64,XcmV3Response)',
            Notified: '(u64,u8,u8)',
            NotifyOverweight: '(u64,u8,u8,SpWeightsWeightV2Weight,SpWeightsWeightV2Weight)',
            NotifyDispatchError: '(u64,u8,u8)',
            NotifyDecodeFailed: '(u64,u8,u8)',
            InvalidResponder: '(XcmV3MultiLocation,u64,Option<XcmV3MultiLocation>)',
            InvalidResponderVersion: '(XcmV3MultiLocation,u64)',
            ResponseTaken: 'u64',
            AssetsTrapped: '(H256,XcmV3MultiLocation,XcmVersionedMultiAssets)',
            VersionChangeNotified: '(XcmV3MultiLocation,u32,XcmV3MultiassetMultiAssets)',
            SupportedVersionChanged: '(XcmV3MultiLocation,u32)',
            NotifyTargetSendFail: '(XcmV3MultiLocation,u64,XcmV3TraitsError)',
            NotifyTargetMigrationFail: '(XcmVersionedMultiLocation,u64)',
            InvalidQuerierVersion: '(XcmV3MultiLocation,u64)',
            InvalidQuerier: '(XcmV3MultiLocation,u64,XcmV3MultiLocation,Option<XcmV3MultiLocation>)',
            VersionNotifyStarted: '(XcmV3MultiLocation,XcmV3MultiassetMultiAssets)',
            VersionNotifyRequested: '(XcmV3MultiLocation,XcmV3MultiassetMultiAssets)',
            VersionNotifyUnrequested: '(XcmV3MultiLocation,XcmV3MultiassetMultiAssets)',
            FeesPaid: '(XcmV3MultiLocation,XcmV3MultiassetMultiAssets)',
            AssetsClaimed: '(H256,XcmV3MultiLocation,XcmVersionedMultiAssets)'
        }
    },
    /**
     * Lookup56: xcm::v3::traits::Outcome
     **/
    XcmV3TraitsOutcome: {
        _enum: {
            Complete: 'SpWeightsWeightV2Weight',
            Incomplete: '(SpWeightsWeightV2Weight,XcmV3TraitsError)',
            Error: 'XcmV3TraitsError'
        }
    },
    /**
     * Lookup57: xcm::v3::multilocation::MultiLocation
     **/
    XcmV3MultiLocation: {
        parents: 'u8',
        interior: 'XcmV3Junctions'
    },
    /**
     * Lookup58: xcm::v3::junctions::Junctions
     **/
    XcmV3Junctions: {
        _enum: {
            Here: 'Null',
            X1: 'XcmV3Junction',
            X2: '(XcmV3Junction,XcmV3Junction)',
            X3: '(XcmV3Junction,XcmV3Junction,XcmV3Junction)',
            X4: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
            X5: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
            X6: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
            X7: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
            X8: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)'
        }
    },
    /**
     * Lookup59: xcm::v3::junction::Junction
     **/
    XcmV3Junction: {
        _enum: {
            Parachain: 'Compact<u32>',
            AccountId32: {
                network: 'Option<XcmV3JunctionNetworkId>',
                id: '[u8;32]',
            },
            AccountIndex64: {
                network: 'Option<XcmV3JunctionNetworkId>',
                index: 'Compact<u64>',
            },
            AccountKey20: {
                network: 'Option<XcmV3JunctionNetworkId>',
                key: '[u8;20]',
            },
            PalletInstance: 'u8',
            GeneralIndex: 'Compact<u128>',
            GeneralKey: {
                length: 'u8',
                data: '[u8;32]',
            },
            OnlyChild: 'Null',
            Plurality: {
                id: 'XcmV3JunctionBodyId',
                part: 'XcmV3JunctionBodyPart',
            },
            GlobalConsensus: 'XcmV3JunctionNetworkId'
        }
    },
    /**
     * Lookup62: xcm::v3::junction::NetworkId
     **/
    XcmV3JunctionNetworkId: {
        _enum: {
            ByGenesis: '[u8;32]',
            ByFork: {
                blockNumber: 'u64',
                blockHash: '[u8;32]',
            },
            Polkadot: 'Null',
            Kusama: 'Null',
            Westend: 'Null',
            Rococo: 'Null',
            Wococo: 'Null',
            Ethereum: {
                chainId: 'Compact<u64>',
            },
            BitcoinCore: 'Null',
            BitcoinCash: 'Null'
        }
    },
    /**
     * Lookup65: xcm::v3::junction::BodyId
     **/
    XcmV3JunctionBodyId: {
        _enum: {
            Unit: 'Null',
            Moniker: '[u8;4]',
            Index: 'Compact<u32>',
            Executive: 'Null',
            Technical: 'Null',
            Legislative: 'Null',
            Judicial: 'Null',
            Defense: 'Null',
            Administration: 'Null',
            Treasury: 'Null'
        }
    },
    /**
     * Lookup66: xcm::v3::junction::BodyPart
     **/
    XcmV3JunctionBodyPart: {
        _enum: {
            Voice: 'Null',
            Members: {
                count: 'Compact<u32>',
            },
            Fraction: {
                nom: 'Compact<u32>',
                denom: 'Compact<u32>',
            },
            AtLeastProportion: {
                nom: 'Compact<u32>',
                denom: 'Compact<u32>',
            },
            MoreThanProportion: {
                nom: 'Compact<u32>',
                denom: 'Compact<u32>'
            }
        }
    },
    /**
     * Lookup67: xcm::v3::Xcm<Call>
     **/
    XcmV3Xcm: 'Vec<XcmV3Instruction>',
    /**
     * Lookup69: xcm::v3::Instruction<Call>
     **/
    XcmV3Instruction: {
        _enum: {
            WithdrawAsset: 'XcmV3MultiassetMultiAssets',
            ReserveAssetDeposited: 'XcmV3MultiassetMultiAssets',
            ReceiveTeleportedAsset: 'XcmV3MultiassetMultiAssets',
            QueryResponse: {
                queryId: 'Compact<u64>',
                response: 'XcmV3Response',
                maxWeight: 'SpWeightsWeightV2Weight',
                querier: 'Option<XcmV3MultiLocation>',
            },
            TransferAsset: {
                assets: 'XcmV3MultiassetMultiAssets',
                beneficiary: 'XcmV3MultiLocation',
            },
            TransferReserveAsset: {
                assets: 'XcmV3MultiassetMultiAssets',
                dest: 'XcmV3MultiLocation',
                xcm: 'XcmV3Xcm',
            },
            Transact: {
                originKind: 'XcmV2OriginKind',
                requireWeightAtMost: 'SpWeightsWeightV2Weight',
                call: 'XcmDoubleEncoded',
            },
            HrmpNewChannelOpenRequest: {
                sender: 'Compact<u32>',
                maxMessageSize: 'Compact<u32>',
                maxCapacity: 'Compact<u32>',
            },
            HrmpChannelAccepted: {
                recipient: 'Compact<u32>',
            },
            HrmpChannelClosing: {
                initiator: 'Compact<u32>',
                sender: 'Compact<u32>',
                recipient: 'Compact<u32>',
            },
            ClearOrigin: 'Null',
            DescendOrigin: 'XcmV3Junctions',
            ReportError: 'XcmV3QueryResponseInfo',
            DepositAsset: {
                assets: 'XcmV3MultiassetMultiAssetFilter',
                beneficiary: 'XcmV3MultiLocation',
            },
            DepositReserveAsset: {
                assets: 'XcmV3MultiassetMultiAssetFilter',
                dest: 'XcmV3MultiLocation',
                xcm: 'XcmV3Xcm',
            },
            ExchangeAsset: {
                give: 'XcmV3MultiassetMultiAssetFilter',
                want: 'XcmV3MultiassetMultiAssets',
                maximal: 'bool',
            },
            InitiateReserveWithdraw: {
                assets: 'XcmV3MultiassetMultiAssetFilter',
                reserve: 'XcmV3MultiLocation',
                xcm: 'XcmV3Xcm',
            },
            InitiateTeleport: {
                assets: 'XcmV3MultiassetMultiAssetFilter',
                dest: 'XcmV3MultiLocation',
                xcm: 'XcmV3Xcm',
            },
            ReportHolding: {
                responseInfo: 'XcmV3QueryResponseInfo',
                assets: 'XcmV3MultiassetMultiAssetFilter',
            },
            BuyExecution: {
                fees: 'XcmV3MultiAsset',
                weightLimit: 'XcmV3WeightLimit',
            },
            RefundSurplus: 'Null',
            SetErrorHandler: 'XcmV3Xcm',
            SetAppendix: 'XcmV3Xcm',
            ClearError: 'Null',
            ClaimAsset: {
                assets: 'XcmV3MultiassetMultiAssets',
                ticket: 'XcmV3MultiLocation',
            },
            Trap: 'Compact<u64>',
            SubscribeVersion: {
                queryId: 'Compact<u64>',
                maxResponseWeight: 'SpWeightsWeightV2Weight',
            },
            UnsubscribeVersion: 'Null',
            BurnAsset: 'XcmV3MultiassetMultiAssets',
            ExpectAsset: 'XcmV3MultiassetMultiAssets',
            ExpectOrigin: 'Option<XcmV3MultiLocation>',
            ExpectError: 'Option<(u32,XcmV3TraitsError)>',
            ExpectTransactStatus: 'XcmV3MaybeErrorCode',
            QueryPallet: {
                moduleName: 'Bytes',
                responseInfo: 'XcmV3QueryResponseInfo',
            },
            ExpectPallet: {
                index: 'Compact<u32>',
                name: 'Bytes',
                moduleName: 'Bytes',
                crateMajor: 'Compact<u32>',
                minCrateMinor: 'Compact<u32>',
            },
            ReportTransactStatus: 'XcmV3QueryResponseInfo',
            ClearTransactStatus: 'Null',
            UniversalOrigin: 'XcmV3Junction',
            ExportMessage: {
                network: 'XcmV3JunctionNetworkId',
                destination: 'XcmV3Junctions',
                xcm: 'XcmV3Xcm',
            },
            LockAsset: {
                asset: 'XcmV3MultiAsset',
                unlocker: 'XcmV3MultiLocation',
            },
            UnlockAsset: {
                asset: 'XcmV3MultiAsset',
                target: 'XcmV3MultiLocation',
            },
            NoteUnlockable: {
                asset: 'XcmV3MultiAsset',
                owner: 'XcmV3MultiLocation',
            },
            RequestUnlock: {
                asset: 'XcmV3MultiAsset',
                locker: 'XcmV3MultiLocation',
            },
            SetFeesMode: {
                jitWithdraw: 'bool',
            },
            SetTopic: '[u8;32]',
            ClearTopic: 'Null',
            AliasOrigin: 'XcmV3MultiLocation',
            UnpaidExecution: {
                weightLimit: 'XcmV3WeightLimit',
                checkOrigin: 'Option<XcmV3MultiLocation>'
            }
        }
    },
    /**
     * Lookup70: xcm::v3::multiasset::MultiAssets
     **/
    XcmV3MultiassetMultiAssets: 'Vec<XcmV3MultiAsset>',
    /**
     * Lookup72: xcm::v3::multiasset::MultiAsset
     **/
    XcmV3MultiAsset: {
        id: 'XcmV3MultiassetAssetId',
        fun: 'XcmV3MultiassetFungibility'
    },
    /**
     * Lookup73: xcm::v3::multiasset::AssetId
     **/
    XcmV3MultiassetAssetId: {
        _enum: {
            Concrete: 'XcmV3MultiLocation',
            Abstract: '[u8;32]'
        }
    },
    /**
     * Lookup74: xcm::v3::multiasset::Fungibility
     **/
    XcmV3MultiassetFungibility: {
        _enum: {
            Fungible: 'Compact<u128>',
            NonFungible: 'XcmV3MultiassetAssetInstance'
        }
    },
    /**
     * Lookup75: xcm::v3::multiasset::AssetInstance
     **/
    XcmV3MultiassetAssetInstance: {
        _enum: {
            Undefined: 'Null',
            Index: 'Compact<u128>',
            Array4: '[u8;4]',
            Array8: '[u8;8]',
            Array16: '[u8;16]',
            Array32: '[u8;32]'
        }
    },
    /**
     * Lookup78: xcm::v3::Response
     **/
    XcmV3Response: {
        _enum: {
            Null: 'Null',
            Assets: 'XcmV3MultiassetMultiAssets',
            ExecutionResult: 'Option<(u32,XcmV3TraitsError)>',
            Version: 'u32',
            PalletsInfo: 'Vec<XcmV3PalletInfo>',
            DispatchResult: 'XcmV3MaybeErrorCode'
        }
    },
    /**
     * Lookup82: xcm::v3::PalletInfo
     **/
    XcmV3PalletInfo: {
        index: 'Compact<u32>',
        name: 'Bytes',
        moduleName: 'Bytes',
        major: 'Compact<u32>',
        minor: 'Compact<u32>',
        patch: 'Compact<u32>'
    },
    /**
     * Lookup85: xcm::v3::MaybeErrorCode
     **/
    XcmV3MaybeErrorCode: {
        _enum: {
            Success: 'Null',
            Error: 'Bytes',
            TruncatedError: 'Bytes'
        }
    },
    /**
     * Lookup88: xcm::v2::OriginKind
     **/
    XcmV2OriginKind: {
        _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
    },
    /**
     * Lookup89: xcm::double_encoded::DoubleEncoded<T>
     **/
    XcmDoubleEncoded: {
        encoded: 'Bytes'
    },
    /**
     * Lookup90: xcm::v3::QueryResponseInfo
     **/
    XcmV3QueryResponseInfo: {
        destination: 'XcmV3MultiLocation',
        queryId: 'Compact<u64>',
        maxWeight: 'SpWeightsWeightV2Weight'
    },
    /**
     * Lookup91: xcm::v3::multiasset::MultiAssetFilter
     **/
    XcmV3MultiassetMultiAssetFilter: {
        _enum: {
            Definite: 'XcmV3MultiassetMultiAssets',
            Wild: 'XcmV3MultiassetWildMultiAsset'
        }
    },
    /**
     * Lookup92: xcm::v3::multiasset::WildMultiAsset
     **/
    XcmV3MultiassetWildMultiAsset: {
        _enum: {
            All: 'Null',
            AllOf: {
                id: 'XcmV3MultiassetAssetId',
                fun: 'XcmV3MultiassetWildFungibility',
            },
            AllCounted: 'Compact<u32>',
            AllOfCounted: {
                id: 'XcmV3MultiassetAssetId',
                fun: 'XcmV3MultiassetWildFungibility',
                count: 'Compact<u32>'
            }
        }
    },
    /**
     * Lookup93: xcm::v3::multiasset::WildFungibility
     **/
    XcmV3MultiassetWildFungibility: {
        _enum: ['Fungible', 'NonFungible']
    },
    /**
     * Lookup94: xcm::v3::WeightLimit
     **/
    XcmV3WeightLimit: {
        _enum: {
            Unlimited: 'Null',
            Limited: 'SpWeightsWeightV2Weight'
        }
    },
    /**
     * Lookup95: xcm::VersionedMultiAssets
     **/
    XcmVersionedMultiAssets: {
        _enum: {
            __Unused0: 'Null',
            V2: 'XcmV2MultiassetMultiAssets',
            __Unused2: 'Null',
            V3: 'XcmV3MultiassetMultiAssets'
        }
    },
    /**
     * Lookup96: xcm::v2::multiasset::MultiAssets
     **/
    XcmV2MultiassetMultiAssets: 'Vec<XcmV2MultiAsset>',
    /**
     * Lookup98: xcm::v2::multiasset::MultiAsset
     **/
    XcmV2MultiAsset: {
        id: 'XcmV2MultiassetAssetId',
        fun: 'XcmV2MultiassetFungibility'
    },
    /**
     * Lookup99: xcm::v2::multiasset::AssetId
     **/
    XcmV2MultiassetAssetId: {
        _enum: {
            Concrete: 'XcmV2MultiLocation',
            Abstract: 'Bytes'
        }
    },
    /**
     * Lookup100: xcm::v2::multilocation::MultiLocation
     **/
    XcmV2MultiLocation: {
        parents: 'u8',
        interior: 'XcmV2MultilocationJunctions'
    },
    /**
     * Lookup101: xcm::v2::multilocation::Junctions
     **/
    XcmV2MultilocationJunctions: {
        _enum: {
            Here: 'Null',
            X1: 'XcmV2Junction',
            X2: '(XcmV2Junction,XcmV2Junction)',
            X3: '(XcmV2Junction,XcmV2Junction,XcmV2Junction)',
            X4: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
            X5: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
            X6: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
            X7: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
            X8: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)'
        }
    },
    /**
     * Lookup102: xcm::v2::junction::Junction
     **/
    XcmV2Junction: {
        _enum: {
            Parachain: 'Compact<u32>',
            AccountId32: {
                network: 'XcmV2NetworkId',
                id: '[u8;32]',
            },
            AccountIndex64: {
                network: 'XcmV2NetworkId',
                index: 'Compact<u64>',
            },
            AccountKey20: {
                network: 'XcmV2NetworkId',
                key: '[u8;20]',
            },
            PalletInstance: 'u8',
            GeneralIndex: 'Compact<u128>',
            GeneralKey: 'Bytes',
            OnlyChild: 'Null',
            Plurality: {
                id: 'XcmV2BodyId',
                part: 'XcmV2BodyPart'
            }
        }
    },
    /**
     * Lookup103: xcm::v2::NetworkId
     **/
    XcmV2NetworkId: {
        _enum: {
            Any: 'Null',
            Named: 'Bytes',
            Polkadot: 'Null',
            Kusama: 'Null'
        }
    },
    /**
     * Lookup105: xcm::v2::BodyId
     **/
    XcmV2BodyId: {
        _enum: {
            Unit: 'Null',
            Named: 'Bytes',
            Index: 'Compact<u32>',
            Executive: 'Null',
            Technical: 'Null',
            Legislative: 'Null',
            Judicial: 'Null',
            Defense: 'Null',
            Administration: 'Null',
            Treasury: 'Null'
        }
    },
    /**
     * Lookup106: xcm::v2::BodyPart
     **/
    XcmV2BodyPart: {
        _enum: {
            Voice: 'Null',
            Members: {
                count: 'Compact<u32>',
            },
            Fraction: {
                nom: 'Compact<u32>',
                denom: 'Compact<u32>',
            },
            AtLeastProportion: {
                nom: 'Compact<u32>',
                denom: 'Compact<u32>',
            },
            MoreThanProportion: {
                nom: 'Compact<u32>',
                denom: 'Compact<u32>'
            }
        }
    },
    /**
     * Lookup107: xcm::v2::multiasset::Fungibility
     **/
    XcmV2MultiassetFungibility: {
        _enum: {
            Fungible: 'Compact<u128>',
            NonFungible: 'XcmV2MultiassetAssetInstance'
        }
    },
    /**
     * Lookup108: xcm::v2::multiasset::AssetInstance
     **/
    XcmV2MultiassetAssetInstance: {
        _enum: {
            Undefined: 'Null',
            Index: 'Compact<u128>',
            Array4: '[u8;4]',
            Array8: '[u8;8]',
            Array16: '[u8;16]',
            Array32: '[u8;32]',
            Blob: 'Bytes'
        }
    },
    /**
     * Lookup109: xcm::VersionedMultiLocation
     **/
    XcmVersionedMultiLocation: {
        _enum: {
            __Unused0: 'Null',
            V2: 'XcmV2MultiLocation',
            __Unused2: 'Null',
            V3: 'XcmV3MultiLocation'
        }
    },
    /**
     * Lookup110: cumulus_pallet_xcm::pallet::Event<T>
     **/
    CumulusPalletXcmEvent: {
        _enum: {
            InvalidFormat: '[u8;32]',
            UnsupportedVersion: '[u8;32]',
            ExecutedDownward: '([u8;32],XcmV3TraitsOutcome)'
        }
    },
    /**
     * Lookup111: cumulus_pallet_dmp_queue::pallet::Event<T>
     **/
    CumulusPalletDmpQueueEvent: {
        _enum: {
            InvalidFormat: {
                messageId: '[u8;32]',
            },
            UnsupportedVersion: {
                messageId: '[u8;32]',
            },
            ExecutedDownward: {
                messageId: '[u8;32]',
                outcome: 'XcmV3TraitsOutcome',
            },
            WeightExhausted: {
                messageId: '[u8;32]',
                remainingWeight: 'SpWeightsWeightV2Weight',
                requiredWeight: 'SpWeightsWeightV2Weight',
            },
            OverweightEnqueued: {
                messageId: '[u8;32]',
                overweightIndex: 'u64',
                requiredWeight: 'SpWeightsWeightV2Weight',
            },
            OverweightServiced: {
                overweightIndex: 'u64',
                weightUsed: 'SpWeightsWeightV2Weight',
            },
            MaxMessagesExhausted: {
                messageId: '[u8;32]'
            }
        }
    },
    /**
     * Lookup112: pallet_utility::pallet::Event
     **/
    PalletUtilityEvent: {
        _enum: {
            BatchInterrupted: {
                index: 'u32',
                error: 'SpRuntimeDispatchError',
            },
            BatchCompleted: 'Null',
            BatchCompletedWithErrors: 'Null',
            ItemCompleted: 'Null',
            ItemFailed: {
                error: 'SpRuntimeDispatchError',
            },
            DispatchedAs: {
                result: 'Result<Null, SpRuntimeDispatchError>'
            }
        }
    },
    /**
     * Lookup113: pallet_scheduler::pallet::Event<T>
     **/
    PalletSchedulerEvent: {
        _enum: {
            Scheduled: {
                when: 'u64',
                index: 'u32',
            },
            Canceled: {
                when: 'u64',
                index: 'u32',
            },
            Dispatched: {
                task: '(u64,u32)',
                id: 'Option<[u8;32]>',
                result: 'Result<Null, SpRuntimeDispatchError>',
            },
            CallUnavailable: {
                task: '(u64,u32)',
                id: 'Option<[u8;32]>',
            },
            PeriodicFailed: {
                task: '(u64,u32)',
                id: 'Option<[u8;32]>',
            },
            PermanentlyOverweight: {
                task: '(u64,u32)',
                id: 'Option<[u8;32]>'
            }
        }
    },
    /**
     * Lookup115: pallet_proxy::pallet::Event<T>
     **/
    PalletProxyEvent: {
        _enum: {
            ProxyExecuted: {
                result: 'Result<Null, SpRuntimeDispatchError>',
            },
            PureCreated: {
                pure: 'AccountId32',
                who: 'AccountId32',
                proxyType: 'CurioMainnetRuntimeUtilitiesProxyType',
                disambiguationIndex: 'u16',
            },
            Announced: {
                real: 'AccountId32',
                proxy: 'AccountId32',
                callHash: 'H256',
            },
            ProxyAdded: {
                delegator: 'AccountId32',
                delegatee: 'AccountId32',
                proxyType: 'CurioMainnetRuntimeUtilitiesProxyType',
                delay: 'u64',
            },
            ProxyRemoved: {
                delegator: 'AccountId32',
                delegatee: 'AccountId32',
                proxyType: 'CurioMainnetRuntimeUtilitiesProxyType',
                delay: 'u64'
            }
        }
    },
    /**
     * Lookup116: curio_mainnet_runtime::utilities::ProxyType
     **/
    CurioMainnetRuntimeUtilitiesProxyType: {
        _enum: ['Any', 'NonTransfer', 'Governance']
    },
    /**
     * Lookup118: pallet_multisig::pallet::Event<T>
     **/
    PalletMultisigEvent: {
        _enum: {
            NewMultisig: {
                approving: 'AccountId32',
                multisig: 'AccountId32',
                callHash: '[u8;32]',
            },
            MultisigApproval: {
                approving: 'AccountId32',
                timepoint: 'PalletMultisigTimepoint',
                multisig: 'AccountId32',
                callHash: '[u8;32]',
            },
            MultisigExecuted: {
                approving: 'AccountId32',
                timepoint: 'PalletMultisigTimepoint',
                multisig: 'AccountId32',
                callHash: '[u8;32]',
                result: 'Result<Null, SpRuntimeDispatchError>',
            },
            MultisigCancelled: {
                cancelling: 'AccountId32',
                timepoint: 'PalletMultisigTimepoint',
                multisig: 'AccountId32',
                callHash: '[u8;32]'
            }
        }
    },
    /**
     * Lookup119: pallet_multisig::Timepoint<BlockNumber>
     **/
    PalletMultisigTimepoint: {
        height: 'u64',
        index: 'u32'
    },
    /**
     * Lookup120: pallet_identity::pallet::Event<T>
     **/
    PalletIdentityEvent: {
        _enum: {
            IdentitySet: {
                who: 'AccountId32',
            },
            IdentityCleared: {
                who: 'AccountId32',
                deposit: 'u128',
            },
            IdentityKilled: {
                who: 'AccountId32',
                deposit: 'u128',
            },
            JudgementRequested: {
                who: 'AccountId32',
                registrarIndex: 'u32',
            },
            JudgementUnrequested: {
                who: 'AccountId32',
                registrarIndex: 'u32',
            },
            JudgementGiven: {
                target: 'AccountId32',
                registrarIndex: 'u32',
            },
            RegistrarAdded: {
                registrarIndex: 'u32',
            },
            SubIdentityAdded: {
                sub: 'AccountId32',
                main: 'AccountId32',
                deposit: 'u128',
            },
            SubIdentityRemoved: {
                sub: 'AccountId32',
                main: 'AccountId32',
                deposit: 'u128',
            },
            SubIdentityRevoked: {
                sub: 'AccountId32',
                main: 'AccountId32',
                deposit: 'u128'
            }
        }
    },
    /**
     * Lookup121: pallet_vesting::pallet::Event<T>
     **/
    PalletVestingEvent: {
        _enum: {
            VestingUpdated: {
                account: 'AccountId32',
                unvested: 'u128',
            },
            VestingCompleted: {
                account: 'AccountId32'
            }
        }
    },
    /**
     * Lookup122: pallet_treasury::pallet::Event<T, I>
     **/
    PalletTreasuryEvent: {
        _enum: {
            Proposed: {
                proposalIndex: 'u32',
            },
            Spending: {
                budgetRemaining: 'u128',
            },
            Awarded: {
                proposalIndex: 'u32',
                award: 'u128',
                account: 'AccountId32',
            },
            Rejected: {
                proposalIndex: 'u32',
                slashed: 'u128',
            },
            Burnt: {
                burntFunds: 'u128',
            },
            Rollover: {
                rolloverBalance: 'u128',
            },
            Deposit: {
                value: 'u128',
            },
            SpendApproved: {
                proposalIndex: 'u32',
                amount: 'u128',
                beneficiary: 'AccountId32',
            },
            UpdatedInactive: {
                reactivated: 'u128',
                deactivated: 'u128'
            }
        }
    },
    /**
     * Lookup123: pallet_bounties::pallet::Event<T, I>
     **/
    PalletBountiesEvent: {
        _enum: {
            BountyProposed: {
                index: 'u32',
            },
            BountyRejected: {
                index: 'u32',
                bond: 'u128',
            },
            BountyBecameActive: {
                index: 'u32',
            },
            BountyAwarded: {
                index: 'u32',
                beneficiary: 'AccountId32',
            },
            BountyClaimed: {
                index: 'u32',
                payout: 'u128',
                beneficiary: 'AccountId32',
            },
            BountyCanceled: {
                index: 'u32',
            },
            BountyExtended: {
                index: 'u32'
            }
        }
    },
    /**
     * Lookup124: pallet_tips::pallet::Event<T, I>
     **/
    PalletTipsEvent: {
        _enum: {
            NewTip: {
                tipHash: 'H256',
            },
            TipClosing: {
                tipHash: 'H256',
            },
            TipClosed: {
                tipHash: 'H256',
                who: 'AccountId32',
                payout: 'u128',
            },
            TipRetracted: {
                tipHash: 'H256',
            },
            TipSlashed: {
                tipHash: 'H256',
                finder: 'AccountId32',
                deposit: 'u128'
            }
        }
    },
    /**
     * Lookup125: pallet_preimage::pallet::Event<T>
     **/
    PalletPreimageEvent: {
        _enum: {
            Noted: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
            },
            Requested: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
            },
            Cleared: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256'
            }
        }
    },
    /**
     * Lookup126: pallet_dex::module::Event<T>
     **/
    PalletDexModuleEvent: {
        _enum: {
            AddProvision: {
                who: 'AccountId32',
                currency0: 'CurioMainnetRuntimeCurrencyId',
                contribution0: 'u128',
                currency1: 'CurioMainnetRuntimeCurrencyId',
                contribution1: 'u128',
            },
            AddLiquidity: {
                who: 'AccountId32',
                currency0: 'CurioMainnetRuntimeCurrencyId',
                pool0: 'u128',
                currency1: 'CurioMainnetRuntimeCurrencyId',
                pool1: 'u128',
                shareIncrement: 'u128',
            },
            RemoveLiquidity: {
                who: 'AccountId32',
                currency0: 'CurioMainnetRuntimeCurrencyId',
                pool0: 'u128',
                currency1: 'CurioMainnetRuntimeCurrencyId',
                pool1: 'u128',
                shareDecrement: 'u128',
            },
            Swap: {
                trader: 'AccountId32',
                path: 'Vec<CurioMainnetRuntimeCurrencyId>',
                liquidityChanges: 'Vec<u128>',
            },
            EnableTradingPair: {
                tradingPair: 'PalletDexTradingPair',
            },
            ListProvisioning: {
                tradingPair: 'PalletDexTradingPair',
            },
            DisableTradingPair: {
                tradingPair: 'PalletDexTradingPair',
            },
            ProvisioningToEnabled: {
                tradingPair: 'PalletDexTradingPair',
                pool0: 'u128',
                pool1: 'u128',
                shareAmount: 'u128',
            },
            RefundProvision: {
                who: 'AccountId32',
                currency0: 'CurioMainnetRuntimeCurrencyId',
                contribution0: 'u128',
                currency1: 'CurioMainnetRuntimeCurrencyId',
                contribution1: 'u128',
            },
            ProvisioningAborted: {
                tradingPair: 'PalletDexTradingPair',
                accumulatedProvision0: 'u128',
                accumulatedProvision1: 'u128'
            }
        }
    },
    /**
     * Lookup127: curio_mainnet_runtime::currency_id::CurrencyId
     **/
    CurioMainnetRuntimeCurrencyId: {
        _enum: {
            Token: 'CurioMainnetRuntimeCurrencyIdTokenSymbol',
            DexShare: '(CurioMainnetRuntimeCurrencyIdDexShare,CurioMainnetRuntimeCurrencyIdDexShare)'
        }
    },
    /**
     * Lookup128: curio_mainnet_runtime::currency_id::TokenSymbol
     **/
    CurioMainnetRuntimeCurrencyIdTokenSymbol: {
        _enum: ['CGT', 'DOT', 'KSM', 'UNQ', 'QTZ', 'GLMR', 'MOVR', '__Unused7', '__Unused8', '__Unused9', '__Unused10', '__Unused11', '__Unused12', '__Unused13', '__Unused14', '__Unused15', '__Unused16', '__Unused17', '__Unused18', '__Unused19', '__Unused20', '__Unused21', '__Unused22', '__Unused23', '__Unused24', '__Unused25', '__Unused26', '__Unused27', '__Unused28', '__Unused29', 'ETH', 'DAI', 'USDT', 'USDC', 'BTC', 'AVAX', 'SOL', 'AURORA', 'NEAR', 'WCT1', 'TON']
    },
    /**
     * Lookup129: curio_mainnet_runtime::currency_id::DexShare
     **/
    CurioMainnetRuntimeCurrencyIdDexShare: {
        _enum: {
            Token: 'CurioMainnetRuntimeCurrencyIdTokenSymbol'
        }
    },
    /**
     * Lookup132: pallet_dex::types::TradingPair<curio_mainnet_runtime::currency_id::CurrencyId>
     **/
    PalletDexTradingPair: '(CurioMainnetRuntimeCurrencyId,CurioMainnetRuntimeCurrencyId)',
    /**
     * Lookup133: pallet_currencies::module::Event<T>
     **/
    PalletCurrenciesModuleEvent: {
        _enum: {
            Transferred: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                from: 'AccountId32',
                to: 'AccountId32',
                amount: 'u128',
            },
            Withdrawn: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            Deposited: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            DustSwept: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                who: 'AccountId32',
                amount: 'u128'
            }
        }
    },
    /**
     * Lookup134: orml_tokens::module::Event<T>
     **/
    OrmlTokensModuleEvent: {
        _enum: {
            Endowed: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            DustLost: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            Transfer: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                from: 'AccountId32',
                to: 'AccountId32',
                amount: 'u128',
            },
            Reserved: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            Unreserved: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            ReserveRepatriated: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                from: 'AccountId32',
                to: 'AccountId32',
                amount: 'u128',
                status: 'FrameSupportTokensMiscBalanceStatus',
            },
            BalanceSet: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                who: 'AccountId32',
                free: 'u128',
                reserved: 'u128',
            },
            TotalIssuanceSet: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                amount: 'u128',
            },
            Withdrawn: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            Slashed: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                who: 'AccountId32',
                freeAmount: 'u128',
                reservedAmount: 'u128',
            },
            Deposited: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            LockSet: {
                lockId: '[u8;8]',
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            LockRemoved: {
                lockId: '[u8;8]',
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                who: 'AccountId32',
            },
            Locked: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            Unlocked: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                who: 'AccountId32',
                amount: 'u128'
            }
        }
    },
    /**
     * Lookup135: pallet_bridge::pallet::Event<T>
     **/
    PalletBridgeEvent: {
        _enum: {
            Paused: 'Null',
            Unpaused: 'Null',
            Mint: {
                requestId: 'u128',
                to: 'AccountId32',
                token: 'H160',
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                amount: 'u128',
            },
            Burn: {
                requestId: 'u128',
                from: 'AccountId32',
                to: 'H160',
                token: 'H160',
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                amount: 'u128',
            },
            ManagerAdded: {
                manager: 'AccountId32',
            },
            ManagerRemoved: {
                manager: 'AccountId32',
            },
            CurrencyPaused: {
                id: 'CurioMainnetRuntimeCurrencyId',
            },
            CurrencyUnpaused: {
                id: 'CurioMainnetRuntimeCurrencyId',
            },
            BlacklistedSub: {
                account: 'AccountId32',
            },
            RemovedFromBlacklistSub: {
                account: 'AccountId32',
            },
            BlacklistedEth: {
                account: 'H160',
            },
            RemovedFromBlacklistEth: {
                account: 'H160'
            }
        }
    },
    /**
     * Lookup137: pallet_sudo::pallet::Event<T>
     **/
    PalletSudoEvent: {
        _enum: {
            Sudid: {
                sudoResult: 'Result<Null, SpRuntimeDispatchError>',
            },
            KeyChanged: {
                oldSudoer: 'Option<AccountId32>',
            },
            SudoAsDone: {
                sudoResult: 'Result<Null, SpRuntimeDispatchError>'
            }
        }
    },
    /**
     * Lookup139: frame_system::Phase
     **/
    FrameSystemPhase: {
        _enum: {
            ApplyExtrinsic: 'u32',
            Finalization: 'Null',
            Initialization: 'Null'
        }
    },
    /**
     * Lookup142: frame_system::LastRuntimeUpgradeInfo
     **/
    FrameSystemLastRuntimeUpgradeInfo: {
        specVersion: 'Compact<u32>',
        specName: 'Text'
    },
    /**
     * Lookup144: frame_system::pallet::Call<T>
     **/
    FrameSystemCall: {
        _enum: {
            remark: {
                remark: 'Bytes',
            },
            set_heap_pages: {
                pages: 'u64',
            },
            set_code: {
                code: 'Bytes',
            },
            set_code_without_checks: {
                code: 'Bytes',
            },
            set_storage: {
                items: 'Vec<(Bytes,Bytes)>',
            },
            kill_storage: {
                _alias: {
                    keys_: 'keys',
                },
                keys_: 'Vec<Bytes>',
            },
            kill_prefix: {
                prefix: 'Bytes',
                subkeys: 'u32',
            },
            remark_with_event: {
                remark: 'Bytes'
            }
        }
    },
    /**
     * Lookup148: frame_system::limits::BlockWeights
     **/
    FrameSystemLimitsBlockWeights: {
        baseBlock: 'SpWeightsWeightV2Weight',
        maxBlock: 'SpWeightsWeightV2Weight',
        perClass: 'FrameSupportDispatchPerDispatchClassWeightsPerClass'
    },
    /**
     * Lookup149: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
     **/
    FrameSupportDispatchPerDispatchClassWeightsPerClass: {
        normal: 'FrameSystemLimitsWeightsPerClass',
        operational: 'FrameSystemLimitsWeightsPerClass',
        mandatory: 'FrameSystemLimitsWeightsPerClass'
    },
    /**
     * Lookup150: frame_system::limits::WeightsPerClass
     **/
    FrameSystemLimitsWeightsPerClass: {
        baseExtrinsic: 'SpWeightsWeightV2Weight',
        maxExtrinsic: 'Option<SpWeightsWeightV2Weight>',
        maxTotal: 'Option<SpWeightsWeightV2Weight>',
        reserved: 'Option<SpWeightsWeightV2Weight>'
    },
    /**
     * Lookup152: frame_system::limits::BlockLength
     **/
    FrameSystemLimitsBlockLength: {
        max: 'FrameSupportDispatchPerDispatchClassU32'
    },
    /**
     * Lookup153: frame_support::dispatch::PerDispatchClass<T>
     **/
    FrameSupportDispatchPerDispatchClassU32: {
        normal: 'u32',
        operational: 'u32',
        mandatory: 'u32'
    },
    /**
     * Lookup154: sp_weights::RuntimeDbWeight
     **/
    SpWeightsRuntimeDbWeight: {
        read: 'u64',
        write: 'u64'
    },
    /**
     * Lookup155: sp_version::RuntimeVersion
     **/
    SpVersionRuntimeVersion: {
        specName: 'Text',
        implName: 'Text',
        authoringVersion: 'u32',
        specVersion: 'u32',
        implVersion: 'u32',
        apis: 'Vec<([u8;8],u32)>',
        transactionVersion: 'u32',
        stateVersion: 'u8'
    },
    /**
     * Lookup159: frame_system::pallet::Error<T>
     **/
    FrameSystemError: {
        _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
    },
    /**
     * Lookup160: pallet_timestamp::pallet::Call<T>
     **/
    PalletTimestampCall: {
        _enum: {
            set: {
                now: 'Compact<u64>'
            }
        }
    },
    /**
     * Lookup162: pallet_indices::pallet::Call<T>
     **/
    PalletIndicesCall: {
        _enum: {
            claim: {
                index: 'u32',
            },
            transfer: {
                _alias: {
                    new_: 'new',
                },
                new_: 'MultiAddress',
                index: 'u32',
            },
            free: {
                index: 'u32',
            },
            force_transfer: {
                _alias: {
                    new_: 'new',
                },
                new_: 'MultiAddress',
                index: 'u32',
                freeze: 'bool',
            },
            freeze: {
                index: 'u32'
            }
        }
    },
    /**
     * Lookup165: pallet_indices::pallet::Error<T>
     **/
    PalletIndicesError: {
        _enum: ['NotAssigned', 'NotOwner', 'InUse', 'NotTransfer', 'Permanent']
    },
    /**
     * Lookup166: polkadot_primitives::v2::PersistedValidationData<primitive_types::H256, N>
     **/
    PolkadotPrimitivesV2PersistedValidationData: {
        parentHead: 'Bytes',
        relayParentNumber: 'u32',
        relayParentStorageRoot: 'H256',
        maxPovSize: 'u32'
    },
    /**
     * Lookup169: polkadot_primitives::v2::UpgradeRestriction
     **/
    PolkadotPrimitivesV2UpgradeRestriction: {
        _enum: ['Present']
    },
    /**
     * Lookup170: sp_trie::storage_proof::StorageProof
     **/
    SpTrieStorageProof: {
        trieNodes: 'BTreeSet<Bytes>'
    },
    /**
     * Lookup172: cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
     **/
    CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: {
        dmqMqcHead: 'H256',
        relayDispatchQueueSize: '(u32,u32)',
        ingressChannels: 'Vec<(u32,PolkadotPrimitivesV2AbridgedHrmpChannel)>',
        egressChannels: 'Vec<(u32,PolkadotPrimitivesV2AbridgedHrmpChannel)>'
    },
    /**
     * Lookup176: polkadot_primitives::v2::AbridgedHrmpChannel
     **/
    PolkadotPrimitivesV2AbridgedHrmpChannel: {
        maxCapacity: 'u32',
        maxTotalSize: 'u32',
        maxMessageSize: 'u32',
        msgCount: 'u32',
        totalSize: 'u32',
        mqcHead: 'Option<H256>'
    },
    /**
     * Lookup178: polkadot_primitives::v2::AbridgedHostConfiguration
     **/
    PolkadotPrimitivesV2AbridgedHostConfiguration: {
        maxCodeSize: 'u32',
        maxHeadDataSize: 'u32',
        maxUpwardQueueCount: 'u32',
        maxUpwardQueueSize: 'u32',
        maxUpwardMessageSize: 'u32',
        maxUpwardMessageNumPerCandidate: 'u32',
        hrmpMaxMessageNumPerCandidate: 'u32',
        validationUpgradeCooldown: 'u32',
        validationUpgradeDelay: 'u32'
    },
    /**
     * Lookup184: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain::primitives::Id>
     **/
    PolkadotCorePrimitivesOutboundHrmpMessage: {
        recipient: 'u32',
        data: 'Bytes'
    },
    /**
     * Lookup185: cumulus_pallet_parachain_system::pallet::Call<T>
     **/
    CumulusPalletParachainSystemCall: {
        _enum: {
            set_validation_data: {
                data: 'CumulusPrimitivesParachainInherentParachainInherentData',
            },
            sudo_send_upward_message: {
                message: 'Bytes',
            },
            authorize_upgrade: {
                codeHash: 'H256',
            },
            enact_authorized_upgrade: {
                code: 'Bytes'
            }
        }
    },
    /**
     * Lookup186: cumulus_primitives_parachain_inherent::ParachainInherentData
     **/
    CumulusPrimitivesParachainInherentParachainInherentData: {
        validationData: 'PolkadotPrimitivesV2PersistedValidationData',
        relayChainState: 'SpTrieStorageProof',
        downwardMessages: 'Vec<PolkadotCorePrimitivesInboundDownwardMessage>',
        horizontalMessages: 'BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>'
    },
    /**
     * Lookup188: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
     **/
    PolkadotCorePrimitivesInboundDownwardMessage: {
        sentAt: 'u32',
        msg: 'Bytes'
    },
    /**
     * Lookup191: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
     **/
    PolkadotCorePrimitivesInboundHrmpMessage: {
        sentAt: 'u32',
        data: 'Bytes'
    },
    /**
     * Lookup194: cumulus_pallet_parachain_system::pallet::Error<T>
     **/
    CumulusPalletParachainSystemError: {
        _enum: ['OverlappingUpgrades', 'ProhibitedByPolkadot', 'TooBig', 'ValidationDataNotAvailable', 'HostConfigurationNotAvailable', 'NotScheduled', 'NothingAuthorized', 'Unauthorized']
    },
    /**
     * Lookup196: pallet_balances::BalanceLock<Balance>
     **/
    PalletBalancesBalanceLock: {
        id: '[u8;8]',
        amount: 'u128',
        reasons: 'PalletBalancesReasons'
    },
    /**
     * Lookup197: pallet_balances::Reasons
     **/
    PalletBalancesReasons: {
        _enum: ['Fee', 'Misc', 'All']
    },
    /**
     * Lookup200: pallet_balances::ReserveData<ReserveIdentifier, Balance>
     **/
    PalletBalancesReserveData: {
        id: '[u8;8]',
        amount: 'u128'
    },
    /**
     * Lookup202: pallet_balances::pallet::Call<T, I>
     **/
    PalletBalancesCall: {
        _enum: {
            transfer: {
                dest: 'MultiAddress',
                value: 'Compact<u128>',
            },
            set_balance: {
                who: 'MultiAddress',
                newFree: 'Compact<u128>',
                newReserved: 'Compact<u128>',
            },
            force_transfer: {
                source: 'MultiAddress',
                dest: 'MultiAddress',
                value: 'Compact<u128>',
            },
            transfer_keep_alive: {
                dest: 'MultiAddress',
                value: 'Compact<u128>',
            },
            transfer_all: {
                dest: 'MultiAddress',
                keepAlive: 'bool',
            },
            force_unreserve: {
                who: 'MultiAddress',
                amount: 'u128'
            }
        }
    },
    /**
     * Lookup203: pallet_balances::pallet::Error<T, I>
     **/
    PalletBalancesError: {
        _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'KeepAlive', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves']
    },
    /**
     * Lookup205: pallet_transaction_payment::Releases
     **/
    PalletTransactionPaymentReleases: {
        _enum: ['V1Ancient', 'V2']
    },
    /**
     * Lookup207: sp_consensus_aura::sr25519::app_sr25519::Public
     **/
    SpConsensusAuraSr25519AppSr25519Public: 'SpCoreSr25519Public',
    /**
     * Lookup208: sp_core::sr25519::Public
     **/
    SpCoreSr25519Public: '[u8;32]',
    /**
     * Lookup214: curio_mainnet_runtime::consensus::SessionKeys
     **/
    CurioMainnetRuntimeConsensusSessionKeys: {
        aura: 'SpConsensusAuraSr25519AppSr25519Public'
    },
    /**
     * Lookup217: sp_core::crypto::KeyTypeId
     **/
    SpCoreCryptoKeyTypeId: '[u8;4]',
    /**
     * Lookup218: pallet_session::pallet::Call<T>
     **/
    PalletSessionCall: {
        _enum: {
            set_keys: {
                _alias: {
                    keys_: 'keys',
                },
                keys_: 'CurioMainnetRuntimeConsensusSessionKeys',
                proof: 'Bytes',
            },
            purge_keys: 'Null'
        }
    },
    /**
     * Lookup219: pallet_session::pallet::Error<T>
     **/
    PalletSessionError: {
        _enum: ['InvalidProof', 'NoAssociatedValidatorId', 'DuplicatedKey', 'NoKeys', 'NoAccount']
    },
    /**
     * Lookup220: parachain_staking::types::RoundInfo<BlockNumber>
     **/
    ParachainStakingRoundInfo: {
        current: 'u32',
        first: 'u64',
        length: 'u64'
    },
    /**
     * Lookup221: parachain_staking::types::DelegationCounter
     **/
    ParachainStakingDelegationCounter: {
        round: 'u32',
        counter: 'u32'
    },
    /**
     * Lookup222: parachain_staking::types::Stake<sp_core::crypto::AccountId32, Balance>
     **/
    ParachainStakingStake: {
        owner: 'AccountId32',
        amount: 'u128'
    },
    /**
     * Lookup223: parachain_staking::types::Candidate<sp_core::crypto::AccountId32, Balance, MaxDelegatorsPerCandidate>
     **/
    ParachainStakingCandidate: {
        id: 'AccountId32',
        stake: 'u128',
        delegators: 'ParachainStakingSetOrderedSet',
        total: 'u128',
        status: 'ParachainStakingCandidateStatus'
    },
    /**
     * Lookup224: parachain_staking::set::OrderedSet<parachain_staking::types::Stake<sp_core::crypto::AccountId32, Balance>, S>
     **/
    ParachainStakingSetOrderedSet: 'Vec<ParachainStakingStake>',
    /**
     * Lookup227: parachain_staking::types::CandidateStatus
     **/
    ParachainStakingCandidateStatus: {
        _enum: {
            Active: 'Null',
            Leaving: 'u32'
        }
    },
    /**
     * Lookup228: parachain_staking::types::TotalStake<Balance>
     **/
    ParachainStakingTotalStake: {
        collators: 'u128',
        delegators: 'u128'
    },
    /**
     * Lookup231: parachain_staking::inflation::InflationInfo
     **/
    ParachainStakingInflationInflationInfo: {
        collator: 'ParachainStakingInflationStakingInfo',
        delegator: 'ParachainStakingInflationStakingInfo'
    },
    /**
     * Lookup232: parachain_staking::inflation::StakingInfo
     **/
    ParachainStakingInflationStakingInfo: {
        maxRate: 'Perquintill',
        rewardRate: 'ParachainStakingInflationRewardRate'
    },
    /**
     * Lookup233: parachain_staking::inflation::RewardRate
     **/
    ParachainStakingInflationRewardRate: {
        annual: 'Perquintill',
        perBlock: 'Perquintill'
    },
    /**
     * Lookup238: parachain_staking::pallet::Call<T>
     **/
    ParachainStakingCall: {
        _enum: {
            force_new_round: 'Null',
            set_inflation: {
                collatorMaxRatePercentage: 'Perquintill',
                collatorAnnualRewardRatePercentage: 'Perquintill',
                delegatorMaxRatePercentage: 'Perquintill',
                delegatorAnnualRewardRatePercentage: 'Perquintill',
            },
            set_max_selected_candidates: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_blocks_per_round: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u64',
            },
            set_max_candidate_stake: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u128',
            },
            force_remove_candidate: {
                collator: 'MultiAddress',
            },
            join_candidates: {
                stake: 'u128',
            },
            init_leave_candidates: 'Null',
            execute_leave_candidates: {
                collator: 'MultiAddress',
            },
            cancel_leave_candidates: 'Null',
            candidate_stake_more: {
                more: 'u128',
            },
            candidate_stake_less: {
                less: 'u128',
            },
            join_delegators: {
                collator: 'MultiAddress',
                amount: 'u128',
            },
            leave_delegators: 'Null',
            delegator_stake_more: {
                more: 'u128',
            },
            delegator_stake_less: {
                less: 'u128',
            },
            unlock_unstaked: {
                target: 'MultiAddress',
            },
            claim_rewards: 'Null',
            increment_collator_rewards: 'Null',
            increment_delegator_rewards: 'Null',
            execute_scheduled_reward_change: 'Null'
        }
    },
    /**
     * Lookup239: parachain_staking::pallet::Error<T>
     **/
    ParachainStakingError: {
        _enum: ['DelegatorNotFound', 'CandidateNotFound', 'DelegatorExists', 'CandidateExists', 'ValStakeZero', 'ValStakeBelowMin', 'ValStakeAboveMax', 'DelegationBelowMin', 'AlreadyLeaving', 'NotLeaving', 'CannotLeaveYet', 'CannotJoinBeforeUnlocking', 'AlreadyDelegating', 'NotYetDelegating', 'DelegationsPerRoundExceeded', 'TooManyDelegators', 'TooFewCollatorCandidates', 'CannotStakeIfLeaving', 'CannotDelegateIfLeaving', 'MaxCollatorsPerDelegatorExceeded', 'AlreadyDelegatedCollator', 'DelegationNotFound', 'Underflow', 'CannotSetAboveMax', 'CannotSetBelowMin', 'InvalidSchedule', 'NoMoreUnstaking', 'TooEarly', 'StakeNotFound', 'UnstakingIsEmpty', 'RewardsNotFound']
    },
    /**
     * Lookup242: frame_support::traits::preimages::Bounded<curio_mainnet_runtime::RuntimeCall>
     **/
    FrameSupportPreimagesBounded: {
        _enum: {
            Legacy: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
            },
            Inline: 'Bytes',
            Lookup: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
                len: 'u32'
            }
        }
    },
    /**
     * Lookup244: pallet_democracy::pallet::Call<T>
     **/
    PalletDemocracyCall: {
        _enum: {
            propose: {
                proposal: 'FrameSupportPreimagesBounded',
                value: 'Compact<u128>',
            },
            second: {
                proposal: 'Compact<u32>',
            },
            vote: {
                refIndex: 'Compact<u32>',
                vote: 'PalletDemocracyVoteAccountVote',
            },
            emergency_cancel: {
                refIndex: 'u32',
            },
            external_propose: {
                proposal: 'FrameSupportPreimagesBounded',
            },
            external_propose_majority: {
                proposal: 'FrameSupportPreimagesBounded',
            },
            external_propose_default: {
                proposal: 'FrameSupportPreimagesBounded',
            },
            fast_track: {
                proposalHash: 'H256',
                votingPeriod: 'u64',
                delay: 'u64',
            },
            veto_external: {
                proposalHash: 'H256',
            },
            cancel_referendum: {
                refIndex: 'Compact<u32>',
            },
            delegate: {
                to: 'MultiAddress',
                conviction: 'PalletDemocracyConviction',
                balance: 'u128',
            },
            undelegate: 'Null',
            clear_public_proposals: 'Null',
            unlock: {
                target: 'MultiAddress',
            },
            remove_vote: {
                index: 'u32',
            },
            remove_other_vote: {
                target: 'MultiAddress',
                index: 'u32',
            },
            blacklist: {
                proposalHash: 'H256',
                maybeRefIndex: 'Option<u32>',
            },
            cancel_proposal: {
                propIndex: 'Compact<u32>',
            },
            set_metadata: {
                owner: 'PalletDemocracyMetadataOwner',
                maybeHash: 'Option<H256>'
            }
        }
    },
    /**
     * Lookup245: pallet_democracy::conviction::Conviction
     **/
    PalletDemocracyConviction: {
        _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
    },
    /**
     * Lookup247: pallet_collective::pallet::Call<T, I>
     **/
    PalletCollectiveCall: {
        _enum: {
            set_members: {
                newMembers: 'Vec<AccountId32>',
                prime: 'Option<AccountId32>',
                oldCount: 'u32',
            },
            execute: {
                proposal: 'Call',
                lengthBound: 'Compact<u32>',
            },
            propose: {
                threshold: 'Compact<u32>',
                proposal: 'Call',
                lengthBound: 'Compact<u32>',
            },
            vote: {
                proposal: 'H256',
                index: 'Compact<u32>',
                approve: 'bool',
            },
            close_old_weight: {
                proposalHash: 'H256',
                index: 'Compact<u32>',
                proposalWeightBound: 'Compact<u64>',
                lengthBound: 'Compact<u32>',
            },
            disapprove_proposal: {
                proposalHash: 'H256',
            },
            close: {
                proposalHash: 'H256',
                index: 'Compact<u32>',
                proposalWeightBound: 'SpWeightsWeightV2Weight',
                lengthBound: 'Compact<u32>'
            }
        }
    },
    /**
     * Lookup251: pallet_elections_phragmen::pallet::Call<T>
     **/
    PalletElectionsPhragmenCall: {
        _enum: {
            vote: {
                votes: 'Vec<AccountId32>',
                value: 'Compact<u128>',
            },
            remove_voter: 'Null',
            submit_candidacy: {
                candidateCount: 'Compact<u32>',
            },
            renounce_candidacy: {
                renouncing: 'PalletElectionsPhragmenRenouncing',
            },
            remove_member: {
                who: 'MultiAddress',
                slashBond: 'bool',
                rerunElection: 'bool',
            },
            clean_defunct_voters: {
                numVoters: 'u32',
                numDefunct: 'u32'
            }
        }
    },
    /**
     * Lookup252: pallet_elections_phragmen::Renouncing
     **/
    PalletElectionsPhragmenRenouncing: {
        _enum: {
            Member: 'Null',
            RunnerUp: 'Null',
            Candidate: 'Compact<u32>'
        }
    },
    /**
     * Lookup253: pallet_membership::pallet::Call<T, I>
     **/
    PalletMembershipCall: {
        _enum: {
            add_member: {
                who: 'MultiAddress',
            },
            remove_member: {
                who: 'MultiAddress',
            },
            swap_member: {
                remove: 'MultiAddress',
                add: 'MultiAddress',
            },
            reset_members: {
                members: 'Vec<AccountId32>',
            },
            change_key: {
                _alias: {
                    new_: 'new',
                },
                new_: 'MultiAddress',
            },
            set_prime: {
                who: 'MultiAddress',
            },
            clear_prime: 'Null'
        }
    },
    /**
     * Lookup254: cumulus_pallet_xcmp_queue::pallet::Call<T>
     **/
    CumulusPalletXcmpQueueCall: {
        _enum: {
            service_overweight: {
                index: 'u64',
                weightLimit: 'SpWeightsWeightV2Weight',
            },
            suspend_xcm_execution: 'Null',
            resume_xcm_execution: 'Null',
            update_suspend_threshold: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            update_drop_threshold: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            update_resume_threshold: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            update_threshold_weight: {
                _alias: {
                    new_: 'new',
                },
                new_: 'SpWeightsWeightV2Weight',
            },
            update_weight_restrict_decay: {
                _alias: {
                    new_: 'new',
                },
                new_: 'SpWeightsWeightV2Weight',
            },
            update_xcmp_max_individual_weight: {
                _alias: {
                    new_: 'new',
                },
                new_: 'SpWeightsWeightV2Weight'
            }
        }
    },
    /**
     * Lookup255: pallet_xcm::pallet::Call<T>
     **/
    PalletXcmCall: {
        _enum: {
            send: {
                dest: 'XcmVersionedMultiLocation',
                message: 'XcmVersionedXcm',
            },
            teleport_assets: {
                dest: 'XcmVersionedMultiLocation',
                beneficiary: 'XcmVersionedMultiLocation',
                assets: 'XcmVersionedMultiAssets',
                feeAssetItem: 'u32',
            },
            reserve_transfer_assets: {
                dest: 'XcmVersionedMultiLocation',
                beneficiary: 'XcmVersionedMultiLocation',
                assets: 'XcmVersionedMultiAssets',
                feeAssetItem: 'u32',
            },
            execute: {
                message: 'XcmVersionedXcm',
                maxWeight: 'SpWeightsWeightV2Weight',
            },
            force_xcm_version: {
                location: 'XcmV3MultiLocation',
                xcmVersion: 'u32',
            },
            force_default_xcm_version: {
                maybeXcmVersion: 'Option<u32>',
            },
            force_subscribe_version_notify: {
                location: 'XcmVersionedMultiLocation',
            },
            force_unsubscribe_version_notify: {
                location: 'XcmVersionedMultiLocation',
            },
            limited_reserve_transfer_assets: {
                dest: 'XcmVersionedMultiLocation',
                beneficiary: 'XcmVersionedMultiLocation',
                assets: 'XcmVersionedMultiAssets',
                feeAssetItem: 'u32',
                weightLimit: 'XcmV3WeightLimit',
            },
            limited_teleport_assets: {
                dest: 'XcmVersionedMultiLocation',
                beneficiary: 'XcmVersionedMultiLocation',
                assets: 'XcmVersionedMultiAssets',
                feeAssetItem: 'u32',
                weightLimit: 'XcmV3WeightLimit'
            }
        }
    },
    /**
     * Lookup256: xcm::VersionedXcm<RuntimeCall>
     **/
    XcmVersionedXcm: {
        _enum: {
            __Unused0: 'Null',
            __Unused1: 'Null',
            V2: 'XcmV2Xcm',
            V3: 'XcmV3Xcm'
        }
    },
    /**
     * Lookup257: xcm::v2::Xcm<RuntimeCall>
     **/
    XcmV2Xcm: 'Vec<XcmV2Instruction>',
    /**
     * Lookup259: xcm::v2::Instruction<RuntimeCall>
     **/
    XcmV2Instruction: {
        _enum: {
            WithdrawAsset: 'XcmV2MultiassetMultiAssets',
            ReserveAssetDeposited: 'XcmV2MultiassetMultiAssets',
            ReceiveTeleportedAsset: 'XcmV2MultiassetMultiAssets',
            QueryResponse: {
                queryId: 'Compact<u64>',
                response: 'XcmV2Response',
                maxWeight: 'Compact<u64>',
            },
            TransferAsset: {
                assets: 'XcmV2MultiassetMultiAssets',
                beneficiary: 'XcmV2MultiLocation',
            },
            TransferReserveAsset: {
                assets: 'XcmV2MultiassetMultiAssets',
                dest: 'XcmV2MultiLocation',
                xcm: 'XcmV2Xcm',
            },
            Transact: {
                originType: 'XcmV2OriginKind',
                requireWeightAtMost: 'Compact<u64>',
                call: 'XcmDoubleEncoded',
            },
            HrmpNewChannelOpenRequest: {
                sender: 'Compact<u32>',
                maxMessageSize: 'Compact<u32>',
                maxCapacity: 'Compact<u32>',
            },
            HrmpChannelAccepted: {
                recipient: 'Compact<u32>',
            },
            HrmpChannelClosing: {
                initiator: 'Compact<u32>',
                sender: 'Compact<u32>',
                recipient: 'Compact<u32>',
            },
            ClearOrigin: 'Null',
            DescendOrigin: 'XcmV2MultilocationJunctions',
            ReportError: {
                queryId: 'Compact<u64>',
                dest: 'XcmV2MultiLocation',
                maxResponseWeight: 'Compact<u64>',
            },
            DepositAsset: {
                assets: 'XcmV2MultiassetMultiAssetFilter',
                maxAssets: 'Compact<u32>',
                beneficiary: 'XcmV2MultiLocation',
            },
            DepositReserveAsset: {
                assets: 'XcmV2MultiassetMultiAssetFilter',
                maxAssets: 'Compact<u32>',
                dest: 'XcmV2MultiLocation',
                xcm: 'XcmV2Xcm',
            },
            ExchangeAsset: {
                give: 'XcmV2MultiassetMultiAssetFilter',
                receive: 'XcmV2MultiassetMultiAssets',
            },
            InitiateReserveWithdraw: {
                assets: 'XcmV2MultiassetMultiAssetFilter',
                reserve: 'XcmV2MultiLocation',
                xcm: 'XcmV2Xcm',
            },
            InitiateTeleport: {
                assets: 'XcmV2MultiassetMultiAssetFilter',
                dest: 'XcmV2MultiLocation',
                xcm: 'XcmV2Xcm',
            },
            QueryHolding: {
                queryId: 'Compact<u64>',
                dest: 'XcmV2MultiLocation',
                assets: 'XcmV2MultiassetMultiAssetFilter',
                maxResponseWeight: 'Compact<u64>',
            },
            BuyExecution: {
                fees: 'XcmV2MultiAsset',
                weightLimit: 'XcmV2WeightLimit',
            },
            RefundSurplus: 'Null',
            SetErrorHandler: 'XcmV2Xcm',
            SetAppendix: 'XcmV2Xcm',
            ClearError: 'Null',
            ClaimAsset: {
                assets: 'XcmV2MultiassetMultiAssets',
                ticket: 'XcmV2MultiLocation',
            },
            Trap: 'Compact<u64>',
            SubscribeVersion: {
                queryId: 'Compact<u64>',
                maxResponseWeight: 'Compact<u64>',
            },
            UnsubscribeVersion: 'Null'
        }
    },
    /**
     * Lookup260: xcm::v2::Response
     **/
    XcmV2Response: {
        _enum: {
            Null: 'Null',
            Assets: 'XcmV2MultiassetMultiAssets',
            ExecutionResult: 'Option<(u32,XcmV2TraitsError)>',
            Version: 'u32'
        }
    },
    /**
     * Lookup263: xcm::v2::traits::Error
     **/
    XcmV2TraitsError: {
        _enum: {
            Overflow: 'Null',
            Unimplemented: 'Null',
            UntrustedReserveLocation: 'Null',
            UntrustedTeleportLocation: 'Null',
            MultiLocationFull: 'Null',
            MultiLocationNotInvertible: 'Null',
            BadOrigin: 'Null',
            InvalidLocation: 'Null',
            AssetNotFound: 'Null',
            FailedToTransactAsset: 'Null',
            NotWithdrawable: 'Null',
            LocationCannotHold: 'Null',
            ExceedsMaxMessageSize: 'Null',
            DestinationUnsupported: 'Null',
            Transport: 'Null',
            Unroutable: 'Null',
            UnknownClaim: 'Null',
            FailedToDecode: 'Null',
            MaxWeightInvalid: 'Null',
            NotHoldingFees: 'Null',
            TooExpensive: 'Null',
            Trap: 'u64',
            UnhandledXcmVersion: 'Null',
            WeightLimitReached: 'u64',
            Barrier: 'Null',
            WeightNotComputable: 'Null'
        }
    },
    /**
     * Lookup264: xcm::v2::multiasset::MultiAssetFilter
     **/
    XcmV2MultiassetMultiAssetFilter: {
        _enum: {
            Definite: 'XcmV2MultiassetMultiAssets',
            Wild: 'XcmV2MultiassetWildMultiAsset'
        }
    },
    /**
     * Lookup265: xcm::v2::multiasset::WildMultiAsset
     **/
    XcmV2MultiassetWildMultiAsset: {
        _enum: {
            All: 'Null',
            AllOf: {
                id: 'XcmV2MultiassetAssetId',
                fun: 'XcmV2MultiassetWildFungibility'
            }
        }
    },
    /**
     * Lookup266: xcm::v2::multiasset::WildFungibility
     **/
    XcmV2MultiassetWildFungibility: {
        _enum: ['Fungible', 'NonFungible']
    },
    /**
     * Lookup267: xcm::v2::WeightLimit
     **/
    XcmV2WeightLimit: {
        _enum: {
            Unlimited: 'Null',
            Limited: 'Compact<u64>'
        }
    },
    /**
     * Lookup276: cumulus_pallet_dmp_queue::pallet::Call<T>
     **/
    CumulusPalletDmpQueueCall: {
        _enum: {
            service_overweight: {
                index: 'u64',
                weightLimit: 'SpWeightsWeightV2Weight'
            }
        }
    },
    /**
     * Lookup277: pallet_utility::pallet::Call<T>
     **/
    PalletUtilityCall: {
        _enum: {
            batch: {
                calls: 'Vec<Call>',
            },
            as_derivative: {
                index: 'u16',
                call: 'Call',
            },
            batch_all: {
                calls: 'Vec<Call>',
            },
            dispatch_as: {
                asOrigin: 'CurioMainnetRuntimeOriginCaller',
                call: 'Call',
            },
            force_batch: {
                calls: 'Vec<Call>',
            },
            with_weight: {
                call: 'Call',
                weight: 'SpWeightsWeightV2Weight'
            }
        }
    },
    /**
     * Lookup279: curio_mainnet_runtime::OriginCaller
     **/
    CurioMainnetRuntimeOriginCaller: {
        _enum: {
            system: 'FrameSupportDispatchRawOrigin',
            __Unused1: 'Null',
            __Unused2: 'Null',
            __Unused3: 'Null',
            __Unused4: 'Null',
            Void: 'SpCoreVoid',
            __Unused6: 'Null',
            __Unused7: 'Null',
            __Unused8: 'Null',
            __Unused9: 'Null',
            __Unused10: 'Null',
            __Unused11: 'Null',
            __Unused12: 'Null',
            __Unused13: 'Null',
            __Unused14: 'Null',
            __Unused15: 'Null',
            __Unused16: 'Null',
            __Unused17: 'Null',
            __Unused18: 'Null',
            __Unused19: 'Null',
            __Unused20: 'Null',
            __Unused21: 'Null',
            __Unused22: 'Null',
            __Unused23: 'Null',
            __Unused24: 'Null',
            __Unused25: 'Null',
            __Unused26: 'Null',
            __Unused27: 'Null',
            __Unused28: 'Null',
            __Unused29: 'Null',
            __Unused30: 'Null',
            Council: 'PalletCollectiveRawOrigin',
            TechnicalCommittee: 'PalletCollectiveRawOrigin',
            __Unused33: 'Null',
            __Unused34: 'Null',
            __Unused35: 'Null',
            __Unused36: 'Null',
            __Unused37: 'Null',
            __Unused38: 'Null',
            __Unused39: 'Null',
            __Unused40: 'Null',
            PolkadotXcm: 'PalletXcmOrigin',
            CumulusXcm: 'CumulusPalletXcmOrigin'
        }
    },
    /**
     * Lookup280: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
     **/
    FrameSupportDispatchRawOrigin: {
        _enum: {
            Root: 'Null',
            Signed: 'AccountId32',
            None: 'Null'
        }
    },
    /**
     * Lookup281: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, I>
     **/
    PalletCollectiveRawOrigin: {
        _enum: {
            Members: '(u32,u32)',
            Member: 'AccountId32',
            _Phantom: 'Null'
        }
    },
    /**
     * Lookup283: pallet_xcm::pallet::Origin
     **/
    PalletXcmOrigin: {
        _enum: {
            Xcm: 'XcmV3MultiLocation',
            Response: 'XcmV3MultiLocation'
        }
    },
    /**
     * Lookup284: cumulus_pallet_xcm::pallet::Origin
     **/
    CumulusPalletXcmOrigin: {
        _enum: {
            Relay: 'Null',
            SiblingParachain: 'u32'
        }
    },
    /**
     * Lookup285: sp_core::Void
     **/
    SpCoreVoid: 'Null',
    /**
     * Lookup286: pallet_scheduler::pallet::Call<T>
     **/
    PalletSchedulerCall: {
        _enum: {
            schedule: {
                when: 'u64',
                maybePeriodic: 'Option<(u64,u32)>',
                priority: 'u8',
                call: 'Call',
            },
            cancel: {
                when: 'u64',
                index: 'u32',
            },
            schedule_named: {
                id: '[u8;32]',
                when: 'u64',
                maybePeriodic: 'Option<(u64,u32)>',
                priority: 'u8',
                call: 'Call',
            },
            cancel_named: {
                id: '[u8;32]',
            },
            schedule_after: {
                after: 'u64',
                maybePeriodic: 'Option<(u64,u32)>',
                priority: 'u8',
                call: 'Call',
            },
            schedule_named_after: {
                id: '[u8;32]',
                after: 'u64',
                maybePeriodic: 'Option<(u64,u32)>',
                priority: 'u8',
                call: 'Call'
            }
        }
    },
    /**
     * Lookup288: pallet_proxy::pallet::Call<T>
     **/
    PalletProxyCall: {
        _enum: {
            proxy: {
                real: 'MultiAddress',
                forceProxyType: 'Option<CurioMainnetRuntimeUtilitiesProxyType>',
                call: 'Call',
            },
            add_proxy: {
                delegate: 'MultiAddress',
                proxyType: 'CurioMainnetRuntimeUtilitiesProxyType',
                delay: 'u64',
            },
            remove_proxy: {
                delegate: 'MultiAddress',
                proxyType: 'CurioMainnetRuntimeUtilitiesProxyType',
                delay: 'u64',
            },
            remove_proxies: 'Null',
            create_pure: {
                proxyType: 'CurioMainnetRuntimeUtilitiesProxyType',
                delay: 'u64',
                index: 'u16',
            },
            kill_pure: {
                spawner: 'MultiAddress',
                proxyType: 'CurioMainnetRuntimeUtilitiesProxyType',
                index: 'u16',
                height: 'Compact<u64>',
                extIndex: 'Compact<u32>',
            },
            announce: {
                real: 'MultiAddress',
                callHash: 'H256',
            },
            remove_announcement: {
                real: 'MultiAddress',
                callHash: 'H256',
            },
            reject_announcement: {
                delegate: 'MultiAddress',
                callHash: 'H256',
            },
            proxy_announced: {
                delegate: 'MultiAddress',
                real: 'MultiAddress',
                forceProxyType: 'Option<CurioMainnetRuntimeUtilitiesProxyType>',
                call: 'Call'
            }
        }
    },
    /**
     * Lookup290: pallet_multisig::pallet::Call<T>
     **/
    PalletMultisigCall: {
        _enum: {
            as_multi_threshold_1: {
                otherSignatories: 'Vec<AccountId32>',
                call: 'Call',
            },
            as_multi: {
                threshold: 'u16',
                otherSignatories: 'Vec<AccountId32>',
                maybeTimepoint: 'Option<PalletMultisigTimepoint>',
                call: 'Call',
                maxWeight: 'SpWeightsWeightV2Weight',
            },
            approve_as_multi: {
                threshold: 'u16',
                otherSignatories: 'Vec<AccountId32>',
                maybeTimepoint: 'Option<PalletMultisigTimepoint>',
                callHash: '[u8;32]',
                maxWeight: 'SpWeightsWeightV2Weight',
            },
            cancel_as_multi: {
                threshold: 'u16',
                otherSignatories: 'Vec<AccountId32>',
                timepoint: 'PalletMultisigTimepoint',
                callHash: '[u8;32]'
            }
        }
    },
    /**
     * Lookup292: pallet_identity::pallet::Call<T>
     **/
    PalletIdentityCall: {
        _enum: {
            add_registrar: {
                account: 'MultiAddress',
            },
            set_identity: {
                info: 'PalletIdentityIdentityInfo',
            },
            set_subs: {
                subs: 'Vec<(AccountId32,Data)>',
            },
            clear_identity: 'Null',
            request_judgement: {
                regIndex: 'Compact<u32>',
                maxFee: 'Compact<u128>',
            },
            cancel_request: {
                regIndex: 'u32',
            },
            set_fee: {
                index: 'Compact<u32>',
                fee: 'Compact<u128>',
            },
            set_account_id: {
                _alias: {
                    new_: 'new',
                },
                index: 'Compact<u32>',
                new_: 'MultiAddress',
            },
            set_fields: {
                index: 'Compact<u32>',
                fields: 'PalletIdentityBitFlags',
            },
            provide_judgement: {
                regIndex: 'Compact<u32>',
                target: 'MultiAddress',
                judgement: 'PalletIdentityJudgement',
                identity: 'H256',
            },
            kill_identity: {
                target: 'MultiAddress',
            },
            add_sub: {
                sub: 'MultiAddress',
                data: 'Data',
            },
            rename_sub: {
                sub: 'MultiAddress',
                data: 'Data',
            },
            remove_sub: {
                sub: 'MultiAddress',
            },
            quit_sub: 'Null'
        }
    },
    /**
     * Lookup293: pallet_identity::types::IdentityInfo<FieldLimit>
     **/
    PalletIdentityIdentityInfo: {
        additional: 'Vec<(Data,Data)>',
        display: 'Data',
        legal: 'Data',
        web: 'Data',
        riot: 'Data',
        email: 'Data',
        pgpFingerprint: 'Option<[u8;20]>',
        image: 'Data',
        twitter: 'Data'
    },
    /**
     * Lookup329: pallet_identity::types::BitFlags<pallet_identity::types::IdentityField>
     **/
    PalletIdentityBitFlags: {
        _bitLength: 64,
        Display: 1,
        Legal: 2,
        Web: 4,
        Riot: 8,
        Email: 16,
        PgpFingerprint: 32,
        Image: 64,
        Twitter: 128
    },
    /**
     * Lookup330: pallet_identity::types::IdentityField
     **/
    PalletIdentityIdentityField: {
        _enum: ['__Unused0', 'Display', 'Legal', '__Unused3', 'Web', '__Unused5', '__Unused6', '__Unused7', 'Riot', '__Unused9', '__Unused10', '__Unused11', '__Unused12', '__Unused13', '__Unused14', '__Unused15', 'Email', '__Unused17', '__Unused18', '__Unused19', '__Unused20', '__Unused21', '__Unused22', '__Unused23', '__Unused24', '__Unused25', '__Unused26', '__Unused27', '__Unused28', '__Unused29', '__Unused30', '__Unused31', 'PgpFingerprint', '__Unused33', '__Unused34', '__Unused35', '__Unused36', '__Unused37', '__Unused38', '__Unused39', '__Unused40', '__Unused41', '__Unused42', '__Unused43', '__Unused44', '__Unused45', '__Unused46', '__Unused47', '__Unused48', '__Unused49', '__Unused50', '__Unused51', '__Unused52', '__Unused53', '__Unused54', '__Unused55', '__Unused56', '__Unused57', '__Unused58', '__Unused59', '__Unused60', '__Unused61', '__Unused62', '__Unused63', 'Image', '__Unused65', '__Unused66', '__Unused67', '__Unused68', '__Unused69', '__Unused70', '__Unused71', '__Unused72', '__Unused73', '__Unused74', '__Unused75', '__Unused76', '__Unused77', '__Unused78', '__Unused79', '__Unused80', '__Unused81', '__Unused82', '__Unused83', '__Unused84', '__Unused85', '__Unused86', '__Unused87', '__Unused88', '__Unused89', '__Unused90', '__Unused91', '__Unused92', '__Unused93', '__Unused94', '__Unused95', '__Unused96', '__Unused97', '__Unused98', '__Unused99', '__Unused100', '__Unused101', '__Unused102', '__Unused103', '__Unused104', '__Unused105', '__Unused106', '__Unused107', '__Unused108', '__Unused109', '__Unused110', '__Unused111', '__Unused112', '__Unused113', '__Unused114', '__Unused115', '__Unused116', '__Unused117', '__Unused118', '__Unused119', '__Unused120', '__Unused121', '__Unused122', '__Unused123', '__Unused124', '__Unused125', '__Unused126', '__Unused127', 'Twitter']
    },
    /**
     * Lookup331: pallet_identity::types::Judgement<Balance>
     **/
    PalletIdentityJudgement: {
        _enum: {
            Unknown: 'Null',
            FeePaid: 'u128',
            Reasonable: 'Null',
            KnownGood: 'Null',
            OutOfDate: 'Null',
            LowQuality: 'Null',
            Erroneous: 'Null'
        }
    },
    /**
     * Lookup332: pallet_vesting::pallet::Call<T>
     **/
    PalletVestingCall: {
        _enum: {
            vest: 'Null',
            vest_other: {
                target: 'MultiAddress',
            },
            vested_transfer: {
                target: 'MultiAddress',
                schedule: 'PalletVestingVestingInfo',
            },
            force_vested_transfer: {
                source: 'MultiAddress',
                target: 'MultiAddress',
                schedule: 'PalletVestingVestingInfo',
            },
            merge_schedules: {
                schedule1Index: 'u32',
                schedule2Index: 'u32'
            }
        }
    },
    /**
     * Lookup333: pallet_vesting::vesting_info::VestingInfo<Balance, BlockNumber>
     **/
    PalletVestingVestingInfo: {
        locked: 'u128',
        perBlock: 'u128',
        startingBlock: 'u64'
    },
    /**
     * Lookup334: pallet_treasury::pallet::Call<T, I>
     **/
    PalletTreasuryCall: {
        _enum: {
            propose_spend: {
                value: 'Compact<u128>',
                beneficiary: 'MultiAddress',
            },
            reject_proposal: {
                proposalId: 'Compact<u32>',
            },
            approve_proposal: {
                proposalId: 'Compact<u32>',
            },
            spend: {
                amount: 'Compact<u128>',
                beneficiary: 'MultiAddress',
            },
            remove_approval: {
                proposalId: 'Compact<u32>'
            }
        }
    },
    /**
     * Lookup335: pallet_bounties::pallet::Call<T, I>
     **/
    PalletBountiesCall: {
        _enum: {
            propose_bounty: {
                value: 'Compact<u128>',
                description: 'Bytes',
            },
            approve_bounty: {
                bountyId: 'Compact<u32>',
            },
            propose_curator: {
                bountyId: 'Compact<u32>',
                curator: 'MultiAddress',
                fee: 'Compact<u128>',
            },
            unassign_curator: {
                bountyId: 'Compact<u32>',
            },
            accept_curator: {
                bountyId: 'Compact<u32>',
            },
            award_bounty: {
                bountyId: 'Compact<u32>',
                beneficiary: 'MultiAddress',
            },
            claim_bounty: {
                bountyId: 'Compact<u32>',
            },
            close_bounty: {
                bountyId: 'Compact<u32>',
            },
            extend_bounty_expiry: {
                bountyId: 'Compact<u32>',
                remark: 'Bytes'
            }
        }
    },
    /**
     * Lookup336: pallet_tips::pallet::Call<T, I>
     **/
    PalletTipsCall: {
        _enum: {
            report_awesome: {
                reason: 'Bytes',
                who: 'MultiAddress',
            },
            retract_tip: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
            },
            tip_new: {
                reason: 'Bytes',
                who: 'MultiAddress',
                tipValue: 'Compact<u128>',
            },
            tip: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
                tipValue: 'Compact<u128>',
            },
            close_tip: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
            },
            slash_tip: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256'
            }
        }
    },
    /**
     * Lookup337: pallet_preimage::pallet::Call<T>
     **/
    PalletPreimageCall: {
        _enum: {
            note_preimage: {
                bytes: 'Bytes',
            },
            unnote_preimage: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
            },
            request_preimage: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
            },
            unrequest_preimage: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256'
            }
        }
    },
    /**
     * Lookup338: pallet_dex::module::Call<T>
     **/
    PalletDexModuleCall: {
        _enum: {
            swap_with_exact_supply: {
                path: 'Vec<CurioMainnetRuntimeCurrencyId>',
                supplyAmount: 'Compact<u128>',
                minTargetAmount: 'Compact<u128>',
            },
            swap_with_exact_target: {
                path: 'Vec<CurioMainnetRuntimeCurrencyId>',
                targetAmount: 'Compact<u128>',
                maxSupplyAmount: 'Compact<u128>',
            },
            add_liquidity: {
                currencyIdA: 'CurioMainnetRuntimeCurrencyId',
                currencyIdB: 'CurioMainnetRuntimeCurrencyId',
                maxAmountA: 'Compact<u128>',
                maxAmountB: 'Compact<u128>',
                minShareIncrement: 'Compact<u128>',
                stakeIncrementShare: 'bool',
            },
            add_provision: {
                currencyIdA: 'CurioMainnetRuntimeCurrencyId',
                currencyIdB: 'CurioMainnetRuntimeCurrencyId',
                amountA: 'Compact<u128>',
                amountB: 'Compact<u128>',
            },
            claim_dex_share: {
                owner: 'AccountId32',
                currencyIdA: 'CurioMainnetRuntimeCurrencyId',
                currencyIdB: 'CurioMainnetRuntimeCurrencyId',
            },
            remove_liquidity: {
                currencyIdA: 'CurioMainnetRuntimeCurrencyId',
                currencyIdB: 'CurioMainnetRuntimeCurrencyId',
                removeShare: 'Compact<u128>',
                minWithdrawnA: 'Compact<u128>',
                minWithdrawnB: 'Compact<u128>',
                byUnstake: 'bool',
            },
            list_provisioning: {
                currencyIdA: 'CurioMainnetRuntimeCurrencyId',
                currencyIdB: 'CurioMainnetRuntimeCurrencyId',
                minContributionA: 'Compact<u128>',
                minContributionB: 'Compact<u128>',
                targetProvisionA: 'Compact<u128>',
                targetProvisionB: 'Compact<u128>',
                notBefore: 'Compact<u64>',
            },
            update_provisioning_parameters: {
                currencyIdA: 'CurioMainnetRuntimeCurrencyId',
                currencyIdB: 'CurioMainnetRuntimeCurrencyId',
                minContributionA: 'Compact<u128>',
                minContributionB: 'Compact<u128>',
                targetProvisionA: 'Compact<u128>',
                targetProvisionB: 'Compact<u128>',
                notBefore: 'Compact<u64>',
            },
            end_provisioning: {
                currencyIdA: 'CurioMainnetRuntimeCurrencyId',
                currencyIdB: 'CurioMainnetRuntimeCurrencyId',
            },
            enable_trading_pair: {
                currencyIdA: 'CurioMainnetRuntimeCurrencyId',
                currencyIdB: 'CurioMainnetRuntimeCurrencyId',
            },
            disable_trading_pair: {
                currencyIdA: 'CurioMainnetRuntimeCurrencyId',
                currencyIdB: 'CurioMainnetRuntimeCurrencyId',
            },
            refund_provision: {
                owner: 'AccountId32',
                currencyIdA: 'CurioMainnetRuntimeCurrencyId',
                currencyIdB: 'CurioMainnetRuntimeCurrencyId',
            },
            abort_provisioning: {
                currencyIdA: 'CurioMainnetRuntimeCurrencyId',
                currencyIdB: 'CurioMainnetRuntimeCurrencyId'
            }
        }
    },
    /**
     * Lookup339: pallet_currencies::module::Call<T>
     **/
    PalletCurrenciesModuleCall: {
        _enum: {
            transfer: {
                dest: 'MultiAddress',
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                amount: 'Compact<u128>',
            },
            transfer_native_currency: {
                dest: 'MultiAddress',
                amount: 'Compact<u128>',
            },
            update_balance: {
                who: 'MultiAddress',
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                amount: 'i128',
            },
            sweep_dust: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                accounts: 'Vec<AccountId32>'
            }
        }
    },
    /**
     * Lookup341: orml_tokens::module::Call<T>
     **/
    OrmlTokensModuleCall: {
        _enum: {
            transfer: {
                dest: 'MultiAddress',
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                amount: 'Compact<u128>',
            },
            transfer_all: {
                dest: 'MultiAddress',
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                keepAlive: 'bool',
            },
            transfer_keep_alive: {
                dest: 'MultiAddress',
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                amount: 'Compact<u128>',
            },
            force_transfer: {
                source: 'MultiAddress',
                dest: 'MultiAddress',
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                amount: 'Compact<u128>',
            },
            set_balance: {
                who: 'MultiAddress',
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                newFree: 'Compact<u128>',
                newReserved: 'Compact<u128>'
            }
        }
    },
    /**
     * Lookup342: pallet_bridge::pallet::Call<T>
     **/
    PalletBridgeCall: {
        _enum: {
            mint: {
                requestId: 'u128',
                to: 'AccountId32',
                token: 'H160',
                amount: 'u128',
            },
            batch_mint: {
                data: 'Vec<PalletBridgeMintData>',
            },
            burn: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                to: 'H160',
                amount: 'u128',
            },
            set_full_pause: {
                pause: 'bool',
            },
            set_currency_pause: {
                currencyId: 'CurioMainnetRuntimeCurrencyId',
                pause: 'bool',
            },
            set_eth_blacklist: {
                account: 'H160',
                blacklisted: 'bool',
            },
            set_sub_blacklist: {
                account: 'AccountId32',
                blacklisted: 'bool',
            },
            set_manager: {
                manager: 'AccountId32',
                isManager: 'bool'
            }
        }
    },
    /**
     * Lookup344: pallet_bridge::MintData<sp_core::crypto::AccountId32, Balance>
     **/
    PalletBridgeMintData: {
        requestId: 'u128',
        to: 'AccountId32',
        token: 'H160',
        amount: 'u128'
    },
    /**
     * Lookup345: pallet_sudo::pallet::Call<T>
     **/
    PalletSudoCall: {
        _enum: {
            sudo: {
                call: 'Call',
            },
            sudo_unchecked_weight: {
                call: 'Call',
                weight: 'SpWeightsWeightV2Weight',
            },
            set_key: {
                _alias: {
                    new_: 'new',
                },
                new_: 'MultiAddress',
            },
            sudo_as: {
                who: 'MultiAddress',
                call: 'Call'
            }
        }
    },
    /**
     * Lookup350: pallet_democracy::types::ReferendumInfo<BlockNumber, frame_support::traits::preimages::Bounded<curio_mainnet_runtime::RuntimeCall>, Balance>
     **/
    PalletDemocracyReferendumInfo: {
        _enum: {
            Ongoing: 'PalletDemocracyReferendumStatus',
            Finished: {
                approved: 'bool',
                end: 'u64'
            }
        }
    },
    /**
     * Lookup351: pallet_democracy::types::ReferendumStatus<BlockNumber, frame_support::traits::preimages::Bounded<curio_mainnet_runtime::RuntimeCall>, Balance>
     **/
    PalletDemocracyReferendumStatus: {
        end: 'u64',
        proposal: 'FrameSupportPreimagesBounded',
        threshold: 'PalletDemocracyVoteThreshold',
        delay: 'u64',
        tally: 'PalletDemocracyTally'
    },
    /**
     * Lookup352: pallet_democracy::types::Tally<Balance>
     **/
    PalletDemocracyTally: {
        ayes: 'u128',
        nays: 'u128',
        turnout: 'u128'
    },
    /**
     * Lookup353: pallet_democracy::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, MaxVotes>
     **/
    PalletDemocracyVoteVoting: {
        _enum: {
            Direct: {
                votes: 'Vec<(u32,PalletDemocracyVoteAccountVote)>',
                delegations: 'PalletDemocracyDelegations',
                prior: 'PalletDemocracyVotePriorLock',
            },
            Delegating: {
                balance: 'u128',
                target: 'AccountId32',
                conviction: 'PalletDemocracyConviction',
                delegations: 'PalletDemocracyDelegations',
                prior: 'PalletDemocracyVotePriorLock'
            }
        }
    },
    /**
     * Lookup357: pallet_democracy::types::Delegations<Balance>
     **/
    PalletDemocracyDelegations: {
        votes: 'u128',
        capital: 'u128'
    },
    /**
     * Lookup358: pallet_democracy::vote::PriorLock<BlockNumber, Balance>
     **/
    PalletDemocracyVotePriorLock: '(u64,u128)',
    /**
     * Lookup362: pallet_democracy::pallet::Error<T>
     **/
    PalletDemocracyError: {
        _enum: ['ValueLow', 'ProposalMissing', 'AlreadyCanceled', 'DuplicateProposal', 'ProposalBlacklisted', 'NotSimpleMajority', 'InvalidHash', 'NoProposal', 'AlreadyVetoed', 'ReferendumInvalid', 'NoneWaiting', 'NotVoter', 'NoPermission', 'AlreadyDelegating', 'InsufficientFunds', 'NotDelegating', 'VotesExist', 'InstantNotAllowed', 'Nonsense', 'WrongUpperBound', 'MaxVotesReached', 'TooMany', 'VotingPeriodLow', 'PreimageNotExist']
    },
    /**
     * Lookup364: pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber>
     **/
    PalletCollectiveVotes: {
        index: 'u32',
        threshold: 'u32',
        ayes: 'Vec<AccountId32>',
        nays: 'Vec<AccountId32>',
        end: 'u64'
    },
    /**
     * Lookup365: pallet_collective::pallet::Error<T, I>
     **/
    PalletCollectiveError: {
        _enum: ['NotMember', 'DuplicateProposal', 'ProposalMissing', 'WrongIndex', 'DuplicateVote', 'AlreadyInitialized', 'TooEarly', 'TooManyProposals', 'WrongProposalWeight', 'WrongProposalLength']
    },
    /**
     * Lookup369: pallet_elections_phragmen::SeatHolder<sp_core::crypto::AccountId32, Balance>
     **/
    PalletElectionsPhragmenSeatHolder: {
        who: 'AccountId32',
        stake: 'u128',
        deposit: 'u128'
    },
    /**
     * Lookup370: pallet_elections_phragmen::Voter<sp_core::crypto::AccountId32, Balance>
     **/
    PalletElectionsPhragmenVoter: {
        votes: 'Vec<AccountId32>',
        stake: 'u128',
        deposit: 'u128'
    },
    /**
     * Lookup371: pallet_elections_phragmen::pallet::Error<T>
     **/
    PalletElectionsPhragmenError: {
        _enum: ['UnableToVote', 'NoVotes', 'TooManyVotes', 'MaximumVotesExceeded', 'LowBalance', 'UnableToPayBond', 'MustBeVoter', 'DuplicatedCandidate', 'TooManyCandidates', 'MemberSubmit', 'RunnerUpSubmit', 'InsufficientCandidateFunds', 'NotMember', 'InvalidWitnessData', 'InvalidVoteCount', 'InvalidRenouncing', 'InvalidReplacement']
    },
    /**
     * Lookup373: pallet_membership::pallet::Error<T, I>
     **/
    PalletMembershipError: {
        _enum: ['AlreadyMember', 'NotMember', 'TooManyMembers']
    },
    /**
     * Lookup375: cumulus_pallet_xcmp_queue::InboundChannelDetails
     **/
    CumulusPalletXcmpQueueInboundChannelDetails: {
        sender: 'u32',
        state: 'CumulusPalletXcmpQueueInboundState',
        messageMetadata: 'Vec<(u32,PolkadotParachainPrimitivesXcmpMessageFormat)>'
    },
    /**
     * Lookup376: cumulus_pallet_xcmp_queue::InboundState
     **/
    CumulusPalletXcmpQueueInboundState: {
        _enum: ['Ok', 'Suspended']
    },
    /**
     * Lookup379: polkadot_parachain::primitives::XcmpMessageFormat
     **/
    PolkadotParachainPrimitivesXcmpMessageFormat: {
        _enum: ['ConcatenatedVersionedXcm', 'ConcatenatedEncodedBlob', 'Signals']
    },
    /**
     * Lookup382: cumulus_pallet_xcmp_queue::OutboundChannelDetails
     **/
    CumulusPalletXcmpQueueOutboundChannelDetails: {
        recipient: 'u32',
        state: 'CumulusPalletXcmpQueueOutboundState',
        signalsExist: 'bool',
        firstIndex: 'u16',
        lastIndex: 'u16'
    },
    /**
     * Lookup383: cumulus_pallet_xcmp_queue::OutboundState
     **/
    CumulusPalletXcmpQueueOutboundState: {
        _enum: ['Ok', 'Suspended']
    },
    /**
     * Lookup385: cumulus_pallet_xcmp_queue::QueueConfigData
     **/
    CumulusPalletXcmpQueueQueueConfigData: {
        suspendThreshold: 'u32',
        dropThreshold: 'u32',
        resumeThreshold: 'u32',
        thresholdWeight: 'SpWeightsWeightV2Weight',
        weightRestrictDecay: 'SpWeightsWeightV2Weight',
        xcmpMaxIndividualWeight: 'SpWeightsWeightV2Weight'
    },
    /**
     * Lookup387: cumulus_pallet_xcmp_queue::pallet::Error<T>
     **/
    CumulusPalletXcmpQueueError: {
        _enum: ['FailedToSend', 'BadXcmOrigin', 'BadXcm', 'BadOverweightIndex', 'WeightOverLimit']
    },
    /**
     * Lookup388: pallet_xcm::pallet::Error<T>
     **/
    PalletXcmError: {
        _enum: ['Unreachable', 'SendFailure', 'Filtered', 'UnweighableMessage', 'DestinationNotInvertible', 'Empty', 'CannotReanchor', 'TooManyAssets', 'InvalidOrigin', 'BadVersion', 'BadLocation', 'NoSubscription', 'AlreadySubscribed', 'InvalidAsset', 'LowBalance', 'TooManyLocks', 'AccountNotSovereign', 'FeesNotMet', 'LockNotFound', 'InUse']
    },
    /**
     * Lookup389: cumulus_pallet_xcm::pallet::Error<T>
     **/
    CumulusPalletXcmError: 'Null',
    /**
     * Lookup390: cumulus_pallet_dmp_queue::ConfigData
     **/
    CumulusPalletDmpQueueConfigData: {
        maxIndividual: 'SpWeightsWeightV2Weight'
    },
    /**
     * Lookup391: cumulus_pallet_dmp_queue::PageIndexData
     **/
    CumulusPalletDmpQueuePageIndexData: {
        beginUsed: 'u32',
        endUsed: 'u32',
        overweightCount: 'u64'
    },
    /**
     * Lookup394: cumulus_pallet_dmp_queue::pallet::Error<T>
     **/
    CumulusPalletDmpQueueError: {
        _enum: ['Unknown', 'OverLimit']
    },
    /**
     * Lookup395: pallet_utility::pallet::Error<T>
     **/
    PalletUtilityError: {
        _enum: ['TooManyCalls']
    },
    /**
     * Lookup398: pallet_scheduler::Scheduled<Name, frame_support::traits::preimages::Bounded<curio_mainnet_runtime::RuntimeCall>, BlockNumber, curio_mainnet_runtime::OriginCaller, sp_core::crypto::AccountId32>
     **/
    PalletSchedulerScheduled: {
        maybeId: 'Option<[u8;32]>',
        priority: 'u8',
        call: 'FrameSupportPreimagesBounded',
        maybePeriodic: 'Option<(u64,u32)>',
        origin: 'CurioMainnetRuntimeOriginCaller'
    },
    /**
     * Lookup400: pallet_scheduler::pallet::Error<T>
     **/
    PalletSchedulerError: {
        _enum: ['FailedToSchedule', 'NotFound', 'TargetBlockNumberInPast', 'RescheduleNoChange', 'Named']
    },
    /**
     * Lookup403: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, curio_mainnet_runtime::utilities::ProxyType, BlockNumber>
     **/
    PalletProxyProxyDefinition: {
        delegate: 'AccountId32',
        proxyType: 'CurioMainnetRuntimeUtilitiesProxyType',
        delay: 'u64'
    },
    /**
     * Lookup407: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
     **/
    PalletProxyAnnouncement: {
        real: 'AccountId32',
        callHash: 'H256',
        height: 'u64'
    },
    /**
     * Lookup409: pallet_proxy::pallet::Error<T>
     **/
    PalletProxyError: {
        _enum: ['TooMany', 'NotFound', 'NotProxy', 'Unproxyable', 'Duplicate', 'NoPermission', 'Unannounced', 'NoSelfProxy']
    },
    /**
     * Lookup411: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32, MaxApprovals>
     **/
    PalletMultisigMultisig: {
        when: 'PalletMultisigTimepoint',
        deposit: 'u128',
        depositor: 'AccountId32',
        approvals: 'Vec<AccountId32>'
    },
    /**
     * Lookup413: pallet_multisig::pallet::Error<T>
     **/
    PalletMultisigError: {
        _enum: ['MinimumThreshold', 'AlreadyApproved', 'NoApprovalsNeeded', 'TooFewSignatories', 'TooManySignatories', 'SignatoriesOutOfOrder', 'SenderInSignatories', 'NotFound', 'NotOwner', 'NoTimepoint', 'WrongTimepoint', 'UnexpectedTimepoint', 'MaxWeightTooLow', 'AlreadyStored']
    },
    /**
     * Lookup414: pallet_identity::types::Registration<Balance, MaxJudgements, MaxAdditionalFields>
     **/
    PalletIdentityRegistration: {
        judgements: 'Vec<(u32,PalletIdentityJudgement)>',
        deposit: 'u128',
        info: 'PalletIdentityIdentityInfo'
    },
    /**
     * Lookup422: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32>
     **/
    PalletIdentityRegistrarInfo: {
        account: 'AccountId32',
        fee: 'u128',
        fields: 'PalletIdentityBitFlags'
    },
    /**
     * Lookup424: pallet_identity::pallet::Error<T>
     **/
    PalletIdentityError: {
        _enum: ['TooManySubAccounts', 'NotFound', 'NotNamed', 'EmptyIndex', 'FeeChanged', 'NoIdentity', 'StickyJudgement', 'JudgementGiven', 'InvalidJudgement', 'InvalidIndex', 'InvalidTarget', 'TooManyFields', 'TooManyRegistrars', 'AlreadyClaimed', 'NotSub', 'NotOwned', 'JudgementForDifferentIdentity', 'JudgementPaymentFailed']
    },
    /**
     * Lookup427: pallet_vesting::Releases
     **/
    PalletVestingReleases: {
        _enum: ['V0', 'V1']
    },
    /**
     * Lookup428: pallet_vesting::pallet::Error<T>
     **/
    PalletVestingError: {
        _enum: ['NotVesting', 'AtMaxVestingSchedules', 'AmountLow', 'ScheduleIndexOutOfBounds', 'InvalidScheduleParams']
    },
    /**
     * Lookup429: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
     **/
    PalletTreasuryProposal: {
        proposer: 'AccountId32',
        value: 'u128',
        beneficiary: 'AccountId32',
        bond: 'u128'
    },
    /**
     * Lookup433: frame_support::PalletId
     **/
    FrameSupportPalletId: '[u8;8]',
    /**
     * Lookup434: pallet_treasury::pallet::Error<T, I>
     **/
    PalletTreasuryError: {
        _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'TooManyApprovals', 'InsufficientPermission', 'ProposalNotApproved']
    },
    /**
     * Lookup435: pallet_bounties::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
     **/
    PalletBountiesBounty: {
        proposer: 'AccountId32',
        value: 'u128',
        fee: 'u128',
        curatorDeposit: 'u128',
        bond: 'u128',
        status: 'PalletBountiesBountyStatus'
    },
    /**
     * Lookup436: pallet_bounties::BountyStatus<sp_core::crypto::AccountId32, BlockNumber>
     **/
    PalletBountiesBountyStatus: {
        _enum: {
            Proposed: 'Null',
            Approved: 'Null',
            Funded: 'Null',
            CuratorProposed: {
                curator: 'AccountId32',
            },
            Active: {
                curator: 'AccountId32',
                updateDue: 'u64',
            },
            PendingPayout: {
                curator: 'AccountId32',
                beneficiary: 'AccountId32',
                unlockAt: 'u64'
            }
        }
    },
    /**
     * Lookup438: pallet_bounties::pallet::Error<T, I>
     **/
    PalletBountiesError: {
        _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'ReasonTooBig', 'UnexpectedStatus', 'RequireCurator', 'InvalidValue', 'InvalidFee', 'PendingPayout', 'Premature', 'HasActiveChildBounty', 'TooManyQueued']
    },
    /**
     * Lookup439: pallet_tips::OpenTip<sp_core::crypto::AccountId32, Balance, BlockNumber, primitive_types::H256>
     **/
    PalletTipsOpenTip: {
        reason: 'H256',
        who: 'AccountId32',
        finder: 'AccountId32',
        deposit: 'u128',
        closes: 'Option<u64>',
        tips: 'Vec<(AccountId32,u128)>',
        findersFee: 'bool'
    },
    /**
     * Lookup442: pallet_tips::pallet::Error<T, I>
     **/
    PalletTipsError: {
        _enum: ['ReasonTooBig', 'AlreadyKnown', 'UnknownTip', 'NotFinder', 'StillOpen', 'Premature']
    },
    /**
     * Lookup443: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, Balance>
     **/
    PalletPreimageRequestStatus: {
        _enum: {
            Unrequested: {
                deposit: '(AccountId32,u128)',
                len: 'u32',
            },
            Requested: {
                deposit: 'Option<(AccountId32,u128)>',
                count: 'u32',
                len: 'Option<u32>'
            }
        }
    },
    /**
     * Lookup447: pallet_preimage::pallet::Error<T>
     **/
    PalletPreimageError: {
        _enum: ['TooBig', 'AlreadyNoted', 'NotAuthorized', 'NotNoted', 'Requested', 'NotRequested']
    },
    /**
     * Lookup449: pallet_dex::types::TradingPairStatus<Balance, BlockNumber>
     **/
    PalletDexTradingPairStatus: {
        _enum: {
            Disabled: 'Null',
            Provisioning: 'PalletDexProvisioningParameters',
            Enabled: 'Null'
        }
    },
    /**
     * Lookup450: pallet_dex::types::ProvisioningParameters<Balance, BlockNumber>
     **/
    PalletDexProvisioningParameters: {
        minContribution: '(u128,u128)',
        targetProvision: '(u128,u128)',
        accumulatedProvision: '(u128,u128)',
        notBefore: 'u64'
    },
    /**
     * Lookup453: pallet_dex::module::Error<T>
     **/
    PalletDexModuleError: {
        _enum: ['AlreadyEnabled', 'MustBeEnabled', 'MustBeProvisioning', 'MustBeDisabled', 'NotAllowedList', 'InvalidContributionIncrement', 'InvalidLiquidityIncrement', 'InvalidCurrencyId', 'InvalidTradingPathLength', 'InsufficientTargetAmount', 'ExcessiveSupplyAmount', 'InsufficientLiquidity', 'ZeroSupplyAmount', 'ZeroTargetAmount', 'UnacceptableShareIncrement', 'UnacceptableLiquidityWithdrawn', 'InvariantCheckFailed', 'UnqualifiedProvision', 'StillProvisioning', 'InvalidTradingPath', 'NotAllowedRefund', 'CannotSwap']
    },
    /**
     * Lookup454: pallet_currencies::module::Error<T>
     **/
    PalletCurrenciesModuleError: {
        _enum: ['AmountIntoBalanceFailed', 'BalanceTooLow', 'DepositFailed']
    },
    /**
     * Lookup457: orml_tokens::BalanceLock<Balance>
     **/
    OrmlTokensBalanceLock: {
        id: '[u8;8]',
        amount: 'u128'
    },
    /**
     * Lookup459: orml_tokens::AccountData<Balance>
     **/
    OrmlTokensAccountData: {
        free: 'u128',
        reserved: 'u128',
        frozen: 'u128'
    },
    /**
     * Lookup461: orml_tokens::ReserveData<ReserveIdentifier, Balance>
     **/
    OrmlTokensReserveData: {
        id: '[u8;8]',
        amount: 'u128'
    },
    /**
     * Lookup463: orml_tokens::module::Error<T>
     **/
    OrmlTokensModuleError: {
        _enum: ['BalanceTooLow', 'AmountIntoBalanceFailed', 'LiquidityRestrictions', 'MaxLocksExceeded', 'KeepAlive', 'ExistentialDeposit', 'DeadAccount', 'TooManyReserves']
    },
    /**
     * Lookup465: pallet_bridge::pallet::Error<T>
     **/
    PalletBridgeError: {
        _enum: ['BridgePaused', 'SenderNotBridgeManager', 'AlreadyPaused', 'AlreadyNotPaused', 'AlreadyManager', 'AlreadyNotManager', 'CurrencyAlreadyPaused', 'CurrencyAlreadyNotPaused', 'CurrencyNotSupported', 'CurrencyNotActive', 'CurrencyNotPaused', 'SubAccountBlacklisted', 'EthAccountBlacklisted', 'AlreadyBlacklistedSub', 'AlreadyNotBlacklistedSub', 'AlreadyBlacklistedEth', 'AlreadyNotBlacklistedEth', 'RequestAlreadyProcessed', 'InsufficientNativeBridged', 'MaxBatchSizeExceeded']
    },
    /**
     * Lookup466: pallet_sudo::pallet::Error<T>
     **/
    PalletSudoError: {
        _enum: ['RequireSudo']
    },
    /**
     * Lookup468: sp_runtime::MultiSignature
     **/
    SpRuntimeMultiSignature: {
        _enum: {
            Ed25519: 'SpCoreEd25519Signature',
            Sr25519: 'SpCoreSr25519Signature',
            Ecdsa: 'SpCoreEcdsaSignature'
        }
    },
    /**
     * Lookup469: sp_core::ed25519::Signature
     **/
    SpCoreEd25519Signature: '[u8;64]',
    /**
     * Lookup471: sp_core::sr25519::Signature
     **/
    SpCoreSr25519Signature: '[u8;64]',
    /**
     * Lookup472: sp_core::ecdsa::Signature
     **/
    SpCoreEcdsaSignature: '[u8;65]',
    /**
     * Lookup475: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
     **/
    FrameSystemExtensionsCheckNonZeroSender: 'Null',
    /**
     * Lookup476: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
     **/
    FrameSystemExtensionsCheckSpecVersion: 'Null',
    /**
     * Lookup477: frame_system::extensions::check_tx_version::CheckTxVersion<T>
     **/
    FrameSystemExtensionsCheckTxVersion: 'Null',
    /**
     * Lookup478: frame_system::extensions::check_genesis::CheckGenesis<T>
     **/
    FrameSystemExtensionsCheckGenesis: 'Null',
    /**
     * Lookup481: frame_system::extensions::check_nonce::CheckNonce<T>
     **/
    FrameSystemExtensionsCheckNonce: 'Compact<u32>',
    /**
     * Lookup482: frame_system::extensions::check_weight::CheckWeight<T>
     **/
    FrameSystemExtensionsCheckWeight: 'Null',
    /**
     * Lookup483: pallet_transaction_payment::ChargeTransactionPayment<T>
     **/
    PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
    /**
     * Lookup484: curio_mainnet_runtime::Runtime
     **/
    CurioMainnetRuntimeRuntime: 'Null'
};
