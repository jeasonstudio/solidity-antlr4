import * as fs from 'node:fs';
import * as path from 'node:path';
import * as prettier from 'prettier/standalone';
import { plugin, parserName } from '../prettier';
import { test, expect } from 'vitest';

const load = (name: string) =>
  fs
    .readFileSync(path.join(__dirname, `./__files__/${name}.txt`), { encoding: 'utf-8' })
    .toString();

const format = async (code: string) =>
  prettier.format(code, { parser: parserName, plugins: [plugin] });

test('prettier', async () => {
  const code = `// SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.8.20 and less than 0.9.0

pragma solidity solidity ^0.8.20;
pragma solidity solidity soliditysoliditysoliditysoliditysoliditysoliditysoliditysoliditysoliditysolidity ^0.8.20;

import "./Foo.sol";
import * as Foo from "./Foo.sol";
import "./Foo.sol" as Foo;
import { Foo, Bar as Me } from "./Foo.sol";
import { Foo, Bar as Me, Bar as Me, Bar as Me, Bar as Me, Bar as Me, Bar as Me } from "./Foo.sol";


enum Status {
  Pending
}
enum Status {
  Pending,
  Shipped,
  Accepted,
  Rejected,
  Pending,
  Shipped,
  Canceled
}

error NotOwnerError();
error AlreadyQueuedError(bytes32 txId);
error TimestampNotInRangeError(uint blockTimestamp, uint timestamp);
error TimestampExpiredError(uint blockTimestamp, uint expiresAt, uint expiresAt, uint expiresAt, uint expiresAt, uint expiresAt, uint expiresAt);

event ChallengeExit(address indexed sender, uint);
event Withdraw(address indexed to, uint amount, address indexed to, uint amount, address indexed, uint);

using A for *;
using A for B.C;
using A for unit[] global;
using { A, C.D } for B;
using { B, add as + } for B;

struct MyStruct {
}
struct MyStruct {
  string name;
  uint[2] nums;
}

type Foo is address;
string constant boo = 'aaa';

contract TimestampNotInRangeErrorTimestampNotInRangeErrorTimestampNotInRangeError is FOo("foo"), X.Y {
  bool public boo = true;
}

contract h is FOo("foo"), X.Y, TimestampNotInRangeErrorTimestampNotInRangeErrorTimestampNotInRangeError {
  bool public boo = true;
}

contract h is FOo("foo",1), X.Y {
  bool public boo = true;
}

interface IERC165 {
  function supportsInterface(bytes4 interfaceID) external view returns (bool);
}

interface IERC721 is IERC165 {
  function balanceOf(address owner) external view returns (uint balance);

  function ownerOf(uint tokenId) external view returns (address owner);

  function safeTransferFrom(address from, address to, uint tokenId) external;

  function safeTransferFrom(
      address from,
      address to,
      uint tokenId,
      bytes calldata data
  ) external;

  function transferFrom(address from, address to, uint tokenId) external;

  function approve(address to, uint tokenId) external;

  function getApproved(uint tokenId) external view returns (address operator);

  function setApprovalForAll(address operator, bool _approved) external;

  function isApprovedForAll(
      address owner,
      address operator
  ) external view returns (bool);
}


contract AbiEncode {
  function test(address _contract, bytes calldata data) external override(C, B) {
      (bool ok, , string msg, ) = _contract.call(data);
      require(ok, "call failed");
  }
  function encodeWithSignature(
      address to,
      uint amount
  ) external pure override(C, B) returns (bytes memory) {
      return abi.encodeWithSignature("transfer(address,uint256)", to, amount);
  }

  function encodeWithSelector(
      address to,
      uint amount
  ) external pure returns (bytes memory) {
      return abi.encodeWithSelector(IERC20.transfer.selector, to, amount);
  }

  function encodeCall(address to, uint amount) external pure override(C, B) returns (bytes memory, string) {
      return abi.encodeCall(IERC20.transfer, (to, amount));
  }

  function isApprovedForAll(
    address owner,
    address operator
  ) external view override(C, B) returns (bool) {}

  modifier checkBalances(uint[2] memory _balances) {
    require(
        address(this).balance >= _balances[0] + _balances[1],
        "balance of contract must be >= to the total balance of users"
    );
    _;
  }

  modifier txExists(uint _txIndex, uint _txIndex, uint _txIndex, uint _txIndex,uint _txIndex) {
    require(_txIndex < transactions.length, "tx does not exist");
    _;

    while (n > 0) {
      n = n / 2;
    }

    do {
      n = n / 2;
    } while (n > 0);


  }

  mapping(address => bool[]) public isUser;
  mapping(address => uint) public balances;

  function test(address _contract, bytes calldata data) external override(C, B) {
    (bool ok, , string msg, ) = _contract.call(data);
    require(ok, "call failed");

    try foo.myFunc(_i) returns (string memory result) {
      emit Log(result);
    } catch {
        emit Log("external call failed");
    }

    try new Foo(_owner) returns (Foo foo) {
      emit Log("Foo created");
    } catch Error(string memory reason) {
        emit Log(reason);
    } catch (bytes memory reason) {
        emit LogBytes(reason);
    }

    revert DelegatecallFailed();
    revert TimestampNotPassedError(block.timestamp, _timestamp);
    emit Launch(count, msg.sender, _goal, _startAt, _endAt);

    if (map.inserted[key]) {
      map.values[key] = val;
    } else {
        map.inserted[key] = true;
    }

    for (uint i = 0; i < map.size();) {
      assert(map.get(key) == i * 100);
    }
    payable(msg.sender).transfer(_amount);

    results = new bytes[](data.length);

    (bool sent, ) = msg.sender.call{value: amount}("");

    assembly "evmasm" ("foo","bar") {}

    assembly {
      addr := create2(
          callvalue(),
          add(bytecode, 0x20),
          mload(bytecode),
          _salt
      )
      if iszero(extcodesize(addr)) {
          revert(0, 0)
      }

      switch x case 0 {
        addr := create2(
          callvalue(),
          add(bytecode, 0x20),
          mload(bytecode),
          _salt
      )
      } default {
        addr := create2(
          callvalue(),
          add(bytecode, 0x20),
          mload(bytecode),
          _salt
      )
      }

      for
                { let end := add(dataElementLocation, mul(len, 0x20)) }
                lt(dataElementLocation, end)
                { dataElementLocation := add(dataElementLocation, 0x20) }
            {
                sum := add(sum, mload(dataElementLocation))
                addr := create2(
                  callvalue(),
                  add(bytecode, 0x20),
                  mload(bytecode),
                  _salt
                )
            }
        function allocate(length) -> pos {
          pos := mload(0x40)
        }
    }


  }
}

`;
  const result = await prettier.format(code, {
    parser: parserName,
    plugins: [plugin],
  });

  // console.log('-------------------------');
  // console.log(result);
  expect(result).toMatchSnapshot();
});

test('meta', async () => {
  expect(await format(load('meta'))).toMatchSnapshot();
});

test('comment', async () => {
  console.log(await format(load('comment')));
  // expect(await format(load('comment'))).toMatchSnapshot();
});
